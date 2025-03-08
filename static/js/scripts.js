// Datos de los proyectos para los modales
const projectData = {
    project1: {
      title: "Gestión de Mantenimiento Web",
      description:
        "Sistema web desarrollado con Django para la gestión de mantenimiento de equipos industriales. Permite el seguimiento de tareas, generación de reportes y gestión de inventario de repuestos.",
      features: [
        "Dashboard con métricas de mantenimiento en tiempo real",
        "Analisis de mantenimientos y tareas pendientes",
        "Calendario de mantenimientos preventivos",
        "Gestión de inventario de repuestos",
        "Generación de reportes en PDF y Excel",
      ],
      technologies: ["Django", "Bootstrap", "JavaScript", "MySQL", "HTML/CSS"],
      image: "static/img/django_feeder.png?height=300&width=600",
    },
    project2: {
      title: "Comparador de Archivos",
      description:
        "Aplicación de escritorio desarrollada en Python para comparar y analizar diferencias entre archivos de datos. Ideal para validación de información y control de calidad en procesos de migración de datos.",
      features: [
        "Comparación de archivos Excel",
        "Detección automática de diferencias",
        "Visualización de datos en directorios",
        "Exportación de resultados a formato CSV",
        "Conversion de reportes HTML a PDF",
        "Deteccion automatica modo de impresion (one side,both side)",
        "Conexion directa a impresora",
        "Interfaz gráfica intuitiva",
      ],
      technologies: ["Python", "Pandas", "PySide"],
      image: "static/img/comparador.png?height=300&width=600",
    },
    project3: {
      title: "Gestión de Mantenimiento Desktop",
      description:
        "Aplicación de escritorio desarrollada en Java para la gestión de mantenimiento con interfaz intuitiva y base de datos local. Diseñada para entornos donde no se requiere acceso a internet.",
      features: [
        "Gestión de equipos y activos",
        "Programación de mantenimientos preventivos",
        "Registro de mantenimientos correctivos",
        "Gestión de técnicos y asignaciones",
        "Base de datos local con MySQL",
      ],
      technologies: ["Java", "JavaFX", "MySQL"],
      image: "static/img/mantto_java.png?height=300&width=600",
    },
    project4: {
      title: "Dorna GUI",
      description:
        "Interfaz gráfica para control y monitoreo de robots Dorna con visualización en tiempo real. Permite la programación y control de movimientos del robot de forma intuitiva.",
      features: [
        "Control de movimientos en tiempo real",
        "Programación de secuencias de movimientos",
        "Monitoreo de sensores y estado del robot",
        "Registro de operaciones y diagnósticos",
      ],
      technologies: ["Python", "PySimpleGUI", "Matplotlib", "Serial Communication"],
      image: "static/img/dorna_gui.png?height=300&width=600",
    },
    project5: {
      title: "AppGex - DMS System lite",
      description:
        "Aplicación de gestión diseñada para centros de rehabilitación enfocada en el monitoreo y control de los expedientes de usuarios anexados.",
      features: [
        "Gestión de usuarios y expedientes",
        "Seguimiento de sesiones de rehabilitación",
        "Gestión de sesiones de rehabilitación",
        "Notificaciones y recordatorios",
      ],
      technologies: ["Javascript","Python","Flask","TailwindCSS"],
      image: "static/img/appgex.png?height=300&width=600",
    },
    project6: {
      title: "Template",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      features: [
        "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
      technologies: ["Javascript","Python","Flask","TailwindCSS"],
      image: "static/img/SITIO-EN-CONSTRUCCION.jpg?height=300&width=600",
    },
  }
  
  // Esperar a que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", () => {
    // Menú móvil
    const menuToggle = document.getElementById("menu-toggle")
    const mobileMenu = document.getElementById("mobile-menu")
  
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
      })
  
      // Cerrar menú al hacer clic en un enlace
      const mobileLinks = mobileMenu.querySelectorAll("a")
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden")
        })
      })
    }
  
    // Botón de scroll hacia arriba
    const scrollTopButton = document.createElement("div")
    scrollTopButton.classList.add("scroll-top")
    scrollTopButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
      `
    document.body.appendChild(scrollTopButton)
  
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Mostrar/ocultar botón de scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopButton.classList.add("visible")
      } else {
        scrollTopButton.classList.remove("visible")
      }
    })
  
    // Modales de proyectos
    const modalOverlay = document.getElementById("modal-overlay")
    const projectModal = document.getElementById("project-modal")
    const modalTitle = document.getElementById("modal-title")
    const modalContent = document.getElementById("modal-content")
    const closeModal = document.getElementById("close-modal")
  
    // Botones para abrir modal
    const viewDetailsButtons = document.querySelectorAll(".view-details")
  
    viewDetailsButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const projectId = this.getAttribute("data-project")
        const project = projectData[projectId]
  
        if (project) {
          modalTitle.textContent = project.title
  
          // Construir contenido del modal
          let content = `
                      <div class="mb-6">
                          <img src="${project.image}" alt="${project.title}" class="w-full h-auto rounded-lg mb-4">
                          <p class="text-gray-700 mb-4">${project.description}</p>
                      </div>
                      
                      <div class="mb-6">
                          <h4 class="text-lg font-semibold mb-2">Características principales:</h4>
                          <ul class="list-disc pl-5 space-y-1">
                  `
  
          project.features.forEach((feature) => {
            content += `<li class="text-gray-700">${feature}</li>`
          })
  
          content += `
                          </ul>
                      </div>
                      
                      <div>
                          <h4 class="text-lg font-semibold mb-2">Tecnologías utilizadas:</h4>
                          <div class="flex flex-wrap gap-2">
                  `
  
          project.technologies.forEach((tech) => {
            content += `<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">${tech}</span>`
          })
  
          content += `
                          </div>
                      </div>
                  `
  
          modalContent.innerHTML = content
          modalOverlay.classList.remove("hidden")
        }
      })
    })
  
    // Cerrar modal
    if (closeModal) {
      closeModal.addEventListener("click", () => {
        modalOverlay.classList.add("hidden")
      })
    }
  
    // Cerrar modal al hacer clic fuera
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.add("hidden")
      }
    })
  
    // Formulario de contacto
    const contactForm = document.getElementById("contact-form")
    const formSuccess = document.getElementById("form-success")
    const formError = document.getElementById("form-error")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Obtener datos del formulario
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
  
        // Validación básica
        if (!name || !email || !message) {
          formError.textContent = "Por favor, completa todos los campos."
          formError.classList.remove("hidden")
          formSuccess.classList.add("hidden")
          return
        }
  
        // Implementación de envío de correo ( pendiente )
        setTimeout(() => {
          // Mostrar mensaje de éxito
          formSuccess.classList.remove("hidden")
          formError.classList.add("hidden")
  
          // Limpiar formulario
          contactForm.reset()
  
          // Ocultar mensaje después de 5 segundos
          setTimeout(() => {
            formSuccess.classList.add("hidden")
          }, 5000)
        }, 1000)
      })
    }
  })
  
  
