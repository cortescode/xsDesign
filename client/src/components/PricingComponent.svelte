<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="pricing">
    <h2 class="pricing-title">Precios a medida que se ajustán a tus necesidades:</h2>

    <div class="products">

        <div class="product">
            <h3 class="product-title">Landing Page</h3>
            <p>
                Ideal para validar tu idea o negocio.
            </p>
            <ul class="product-details">
                <li>Solo 1 página</li>
                <li>Hasta 1000 contactos</li>
                <li>Hasta 10 correos/mes</li>
                <li>Sistema de email marketing</li>
                <li>
                    Asistente de inteligencia artifical
                </li>
                <li>
                    A/B Testing
                </li>
            </ul>
            <p class="price"> <span class="offer">12€/mes</span> 6€/mes</p>
            <button class="buy-button gradient-button">Adquirir</button>
        </div>

        <div class="product most-common">
            <h3 class="product-title">Professional</h3>
            <p>
                Ideal para administrar y crecer un negocio ya validado.
            </p>
            <ul class="product-details">
                <li>Hasta 5 páginas</li>
                <li>Hasta 10000 contactos</li>
                <li>Sistema de email marketing</li>
                <li>Hasta 100 correos/mes</li>
                <li>
                    Asistente de inteligencia artifical
                </li>
                <li>
                    A/B Testing
                </li>
            </ul>
            <p class="price"> <span class="offer">12€/mes</span> 24€/mes</p>
            <button class="buy-button gradient-button">Adquirir</button>
        </div>

        <div class="product">
            <h3 class="product-title">Corporation</h3>
            <p>
                Ideal para crecer y administrar tu negocio cuando tienes una amplia base de clientes.
            </p>
            <ul class="product-details">
                <li>Páginas ilimitadas</li>
                <li>Hasta 1000 contactos</li>
                <li>Hasta 10 correos semanales</li>
                <li>Blog</li>
                <li>Sistema de email marketing</li>
                <li>
                    Asistente de inteligencia artifical
                </li>
                <li>
                    A/B Testing
                </li>
            </ul>
            <p class="price"> <span class="offer">12€/mes</span> 58€/mes</p>
            <button class="buy-button gradient-button">Adquirir</button>
        </div>

        <div class="product">
            <h3 class="product-title">WebApp</h3>
            <p>Para startups tecnológicas que quieren llevar su idea a producción</p>
            <ul class="product-details">
                <li>
                    Disposición de nuestro equipo.
                </li>
                <li>
                    Páginas ilimitadas.
                </li>
                <li>
                    Software de calidad.
                </li>
                <li>
                    Seguiridad de datos sensibles.
                </li>
                <li>
                    CRM personalizado
                </li>
                <li>
                    Asistente de inteligencia artifical
                </li>
                <li>
                    A/B Testing
                </li>
                <li>
                    Inteligencia artificial integrada
                </li>
                <li>Sistema de email marketing</li>
            </ul>
            <p class="price"> Obtener presupuesto</p>
            <button class="buy-button gradient-button">Contactar</button>
        </div>

    </div>
    <span>Puedes comprar capacidad adicional en email marketing</span>
    
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

.pricing-title {
    color: rgb(20, 0, 80);
    max-width: 400px;
    margin-top: 80px;
}

.products {
    margin-top: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-items: stretch;
}

.product {
    width: 340px;
    border-radius: 12px;
    padding: 20px;
    margin: 10px;
    background-color: white;
    display: grid;
    grid-template-rows: 1fr 1fr 4fr 1fr 1fr;
    grid-template-columns: 1fr;
    gap: 20;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    max-height: 520px;
}

.product.most-common {
    box-shadow: rgba(0, 128, 255, 0.5) 0px 8px 24px;
    border: 2px solid rgb(0, 128, 255);
}


.product.most-common .buy-button{
    box-shadow: rgba(0, 128, 255, 0.5) 0px 0px 16px;
    border: 2px solid rgb(0, 128, 255);
}


.product p {
    margin: 10px 0;
    font-size: 16px;
}

.product ul {
    margin: 10px 0 0 0;
    padding: 10px 20px;
}
.product li {
    font-size: 14px;
    padding: 4px 0;
}

.price {
    text-align: center;
    font-weight: bold;
}

.buy-button {
    margin-top: 0px;
    width: 100%;
    justify-self: center;
    align-self: flex-end;
}

.offer {
    color: rgb(255, 69, 69);
    font-size: 14px;
    text-decoration: line-through;
    margin-right: 10px;
}

</style>
