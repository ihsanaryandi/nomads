(function collapseMenu()
{

	const openMenus = document.querySelectorAll('.open-collapse-menu')

	openMenus.forEach(openMenu => {

		const trigger = openMenu.dataset.collapsetrigger
		const collapseMenu = document.querySelector(trigger)
		const menuHeight = collapseMenu.getBoundingClientRect().height
		const icon = openMenu.lastElementChild;


		// Set default height to 0
		collapseMenu.style.height = menuHeight + 'px'
		collapseMenu.style.overflow = 'hidden'


		openMenu.addEventListener('click', (e) => {

			e.preventDefault()

			if(collapseMenu.getBoundingClientRect().height == 0)
			{

				collapseMenu.style.height = menuHeight + 'px'
				icon.style.transform = 'rotate(0deg)'

			}
			else
			{

				collapseMenu.style.height = '0px'
				icon.style.transform = 'rotate(-180deg)'

			}


		})

	})

})();

(function selectPhoto(){

	const inputFile = document.querySelector('input#selectPhoto');
	const userPhoto = document.querySelector('#userPhoto');
	const fileNameElement = document.querySelector('#fileName');

	if(inputFile)
	{
		inputFile.addEventListener('change', function(e){

			let fileName = inputFile.files[0].name;
			let filePath = inputFile.dataset.filepath;

			userPhoto.src = filePath + fileName;
			fileNameElement.innerHTML = 'Picture Selected : <span class="text-success">' + fileName + '</span>';



		})
	}

})();

(function seePassword(){

	const toggler = document.querySelectorAll('button[data-passwordtarget]');

	if(toggler)
	{
		toggler.forEach(toggle => {
			
			toggle.addEventListener('click', e => {

				e.preventDefault();

				const target = toggle.dataset.passwordtarget;

				const passwordElement = document.querySelector(target);

				const passwordElementType = passwordElement.getAttribute('type');

				const icon = toggle.querySelector('i');

				if(passwordElementType == 'password')
				{
					passwordElement.setAttribute('type', 'text');
					icon.classList.remove('fa-eye');
					icon.classList.add('fa-eye-slash');
				}
				else
				{
					passwordElement.setAttribute('type', 'password');
					icon.classList.add('fa-eye');
					icon.classList.remove('fa-eye-slash');
				}

			});

		})
	}

})();

(function nomadsModal(){

	const modalTogglers = document.querySelectorAll('[data-nmodal]');

	if(modalTogglers)
	{
		modalTogglers.forEach(toggler => {

			toggler.addEventListener('click', e => {

				e.preventDefault();

				const modalTarget = toggler.dataset.nmodal;

				document.querySelector('.nomads-modal' + modalTarget).classList.add('active');

			})

		})
	}

	// Close Modal
	const nomadsModals = document.querySelectorAll('.nomads-modal');

	nomadsModals.forEach(modal => {

		modal.querySelectorAll('[data-close]').forEach(close => {

			close.addEventListener('click', e => {

				e.preventDefault();

				if(close.dataset.close == 'true')
				{

					modal.classList.remove('active');

				}
				
			})

		})

	})

})();


(function numberOnly(){

	const magicNumberInputs = document.querySelectorAll('#magicNumberInputs input');

	if(magicNumberInputs)
	{
		magicNumberInputs.forEach(input => {

			input.addEventListener('keyup', e => {

			    input.value = input.value.slice(0, 1);

			})

		});
	}


})();
