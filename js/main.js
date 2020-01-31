const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);
	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
			toggle.classList.toggle('active');
		});
	}
};
showMenu("icon-menu__bars", "menu-nav");




//Algoritmo para imprimirlo años bisiestos en un rango
/* const app = document.getElementById('app');

function print () {
	for (let i = 2010; i < 2020 ; i++) {
		if (i%4 == 0){
			if (i%100 != 0 || i%400 == 0) document.write(i + '<br>');
		}
	}
}
print();
 */