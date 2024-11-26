<!-- 
    Component that contains UI and functionality for a single domain.
    Main actions:
        Delete Domain
        Refresh Domain 
 -->
<script lang="ts">
    import type { Domain } from "$website/interfaces/Domain";
    import { website } from "$website/stores/website";
    import { MessageStatus, type Message } from "$lib/interfaces/Message";
    import { addMessage } from "$lib/stores/messages";

    export let domain: Domain;
    let message: Message;

    $: {
        $website, domain;
    }

    function deleteDomain(domain: Domain) {
        fetch(`/designer/${$website.id}/settings/domains/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                domain_name: domain.name,
                hostname_id: domain.hostname_id,
            }),
        })
        .then((response) => {
            if (!response.ok) throw new Error();

            if ($website?.config?.domains) {
                $website.config.domains = $website.config.domains.filter(
                    (_domain) => _domain.name != domain.name,
                );
            }

            createAndSetMessage(
                MessageStatus.SUCCESS,
                "Your domain was successfully deleted",
            );
        })
        .catch((error) => {
            createAndSetMessage(
                MessageStatus.ERROR,
                "There was an error deleting your domain",
            );
        });
    }

    function refreshDomain(domain: Domain) {
        const hostname_id = domain.hostname_id;
        fetch(`/designer/${$website.id}/settings/domains/validate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hostname_id: hostname_id,
            }),
        })
            .then((response) => {
                if (!response.ok) throw new Error();

                return response.json();
            })
            .then((response) => {
                createAndSetMessage(
                    MessageStatus.SUCCESS,
                    "Your domain was successfully refreshed.",
                );

                if ($website?.config?.domains) {
                    $website.config.domains = $website.config.domains.map(
                        (_domain) => {
                            if (_domain.hostname_id == domain.hostname_id) {
                                if (response.status == "active")
                                    _domain.active = true;
                                else _domain.active = false;
                                return _domain;
                            }
                            return _domain;
                        },
                    );
                }
            })
            .catch((error) => {
                createAndSetMessage(MessageStatus.ERROR, error.message);
            });
    }

    function createAndSetMessage(status: MessageStatus, content: string) {
        let message: Message = {
            status: status,
            active: true,
            content: content,
        };
        addMessage(message);
    }
</script>


<!-- HTML -->
<div>
    <div class="domain">
        <p>{domain.name}</p>

        <button class="refresh-button" on:click={() => refreshDomain(domain)}>
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                    fill="#000000"
                    d="M3.254,6.572c0.008,0.072,0.048,0.123,0.082,0.187c0.036,0.07,0.06,0.137,0.12,0.187C3.47,6.957,3.47,6.978,3.484,6.988c0.048,0.034,0.108,0.018,0.162,0.035c0.057,0.019,0.1,0.066,0.164,0.066c0.004,0,0.01,0,0.015,0l2.934-0.074c0.317-0.007,0.568-0.271,0.56-0.589C7.311,6.113,7.055,5.865,6.744,5.865c-0.005,0-0.01,0-0.015,0L5.074,5.907c2.146-2.118,5.604-2.634,7.971-1.007c2.775,1.912,3.48,5.726,1.57,8.501c-1.912,2.781-5.729,3.486-8.507,1.572c-0.259-0.18-0.618-0.119-0.799,0.146c-0.18,0.262-0.114,0.621,0.148,0.801c1.254,0.863,2.687,1.279,4.106,1.279c2.313,0,4.591-1.1,6.001-3.146c2.268-3.297,1.432-7.829-1.867-10.101c-2.781-1.913-6.816-1.36-9.351,1.058L4.309,3.567C4.303,3.252,4.036,3.069,3.72,3.007C3.402,3.015,3.151,3.279,3.16,3.597l0.075,2.932C3.234,6.547,3.251,6.556,3.254,6.572z"
                ></path>
            </svg>
        </button>

        <button class="delete-button" on:click={() => deleteDomain(domain)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentcolor"
            >
                <path
                    d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z"
                    fill="#000000"
                />
                <path
                    d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z"
                    fill="#000000"
                />
            </svg>
        </button>
        <div
            class="domain-status"
            style={domain.active ? "" : "background-color:red;"}
        ></div>
    </div>
    {#if !domain.active}
        <p class="unactive-domain-advise">
            Add a <b>CNAME record</b> pointing to
            <b>hosting.xsdesign.co</b> into your domain registrar and refresh status.
        </p>
    {/if}
</div>


<!-- STYLES -->
<style>
    .domain {
        position: relative;
        box-sizing: border-box;
        padding: 8px 20px;
        background-color: var(--light-blue);
        width: 100%;
        height: 60px;
        margin: 10px 0;
        border-radius: 12px;
        font-size: 22px;
        letter-spacing: 1.2px;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 20px;
        font-weight: bold;
        cursor: default !important;
        z-index: 2;
    }

    .domain:hover {
        grid-template-columns: 1fr auto auto auto;
    }

    .domain .delete-button,
    .domain .refresh-button {
        box-sizing: border-box;
        display: none;
        background-color: transparent;
        color: var(--dark);
        border-radius: 12px;
        border: none;
        padding: 4px 10px;
        height: 100%;
        margin: 2px -10px auto auto;
        align-self: center;
    }

    .domain .delete-button svg,
    .domain .refresh-button svg {
        width: 20px;
        height: 20px;
    }

    .domain:hover .delete-button,
    .domain:hover .refresh-button {
        display: block;
    }
    .domain .delete-button:hover {
        background-color: rgb(255, 226, 226);
        border: 1px solid red;
    }

    .domain .refresh-button:hover {
        background-color: rgb(226, 235, 255);
        border: 1px solid var(--blue);
    }

    .domain-list .domain p {
        margin: 0;
        justify-self: left;
    }

    .domain-list .domain .domain-status {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: greenyellow;
        border: 1px solid var(--blue);
        justify-self: right;
    }

    .unactive-domain-advise {
        position: relative;
        padding: 60px 20px 20px 20px;
        margin-top: -40px;
        border-radius: 12px;
        background: linear-gradient(180deg, white, rgb(255, 230, 230));
        font-size: 18px;
        z-index: 1;
    }

    .refresh-button {
        margin-top: 40px;
    }
</style>
