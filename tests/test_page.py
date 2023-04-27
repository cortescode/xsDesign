from app.xsdesigner.domain.page import Page

import unittest


class TestPage(unittest.TestCase):
    def setUp(self) -> None:
        self.page = Page("home", "/", "<h1>Página de prueba</h1>")
        return super().setUp()
    
    def tearDown(self) -> None:
        return super().tearDown()
    
    def test_variable_privacy(self):
        page_url = self.page.url
        self.assertEqual(page_url, "/")


