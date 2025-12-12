// ===============================================
// FORM HANDLER MODULE
// ===============================================

export class FormHandler {
    constructor() {
        this.form = null;
    }

    /**
     * Initialize form handling
     */
    init() {
        this.form = document.getElementById('contactForm');
        if (this.form) {
            this.setupFormSubmit();
        }
    }

    /**
     * Setup form submit handler
     */
    setupFormSubmit() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleSubmit();
        });
    }

    /**
     * Handle form submission
     */
    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        console.log('Form data:', data);

        // Show success message
        alert('¡Gracias por tu consulta! Te contactaremos pronto.');

        // Reset form
        this.form.reset();

        // Here you would typically send the data to a server
        // Example:
        // try {
        //     const response = await fetch('/api/contact', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data)
        //     });
        //     
        //     if (response.ok) {
        //         alert('¡Gracias por tu consulta! Te contactaremos pronto.');
        //         this.form.reset();
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        //     alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
        // }
    }
}
