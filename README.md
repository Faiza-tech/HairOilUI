# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Project Commands:

 npm create vite@latest HairOilShop --template react
 npm install lucide-react
 npm install react-hook-form yup @hookform/resolvers primereact primeicons
 npm install
 npm install react-router-dom react-icons
 npm run dev







 /* ========================== */
/* BUTTONS                    */
/* ========================== */
/*.btn-primary {
  background: var(--dark-green);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  transform: translateY(-2px);
}*/
.btn-primary {
  background: var(--dark-green);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  /* 🔥 FIX */
  text-decoration: none;   /* remove underline */
  color: white;            /* ensure text color */
}

/*.btn-outline {
  border: 1px solid var(--brown);
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;

  /* ✅ IMPORTANT FIX *
  text-decoration: none;
  display: inline-block;
  color: inherit;
}*/

.btn-outline {
  border: 1px solid var(--brown);
  padding: 0.75rem 1.5rem;
  border-radius: 30px;

  background-color: var(--accent);  /* ✅ use this */
 color: var(--primary);
 

  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  transition: 0.3s;
}
/*.btn-outline {
  border: 1px solid var(--brown);
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  /*background: transparent;*
  background-color: #faf9f6;
  cursor: pointer;
  transition: 0.3s;

  text-decoration: none;
  display: inline-flex;   /* better than inline-block *
  align-items: center;
  gap: 0.5rem;
  color: var(--brown);
}*/


.btn-outline:hover {
  background: var(--brown);
  color: #fff;
}