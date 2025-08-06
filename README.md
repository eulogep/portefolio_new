# Portfolio Professionnel - Euloge Mabiala

[![React](https://img.shields.io/badge/React-18.0.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0.0-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0.0-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Auteur:** MABIALA EULOGE JUNIOR  
**Email:** mabiala@et.esiea.fr  
**Portfolio:** [https://igkufcbi.manus.space](https://igkufcbi.manus.space)

Un portfolio moderne et interactif développé avec React, présentant les compétences en cybersécurité et développement logiciel d'Euloge Mabiala. Ce projet combine design futuriste, animations fluides et fonctionnalités avancées pour créer une expérience utilisateur exceptionnelle.

## ✨ Démo

🌐 **Portfolio en ligne :** [https://igkufcbi.manus.space](https://igkufcbi.manus.space)

## 🚀 Fonctionnalités

### 🎨 Design & Interface
- **Thème cyberpunk futuriste** avec effets néon et animations
- **Animations de particules** en arrière-plan dynamiques
- **Écran de chargement interactif** avec barre de progression
- **Navigation fluide** avec smooth scrolling
- **Effets glassmorphism** pour les cartes et composants
- **Responsive design** optimisé pour tous les appareils
- **Mode sombre** avec thème cohérent

### 📱 Sections Principales
1. **Hero Section** - Présentation avec animation de frappe
2. **À Propos** - Parcours et vision professionnelle
3. **Expérience** - Timeline interactive des formations et expériences
4. **Compétences** - Système d'onglets avec barres de progression
5. **Projets** - Galerie filtrée avec aperçus interactifs
6. **Contact** - Formulaire fonctionnel avec validation

### ⚡ Fonctionnalités Avancées
- **Bouton scroll-to-top** avec animation
- **Navigation sticky** avec indicateur de section active
- **Système de filtrage** pour les projets
- **Animations hover** et micro-interactions
- **Optimisation SEO** avec métadonnées appropriées
- **Performance optimisée** avec lazy loading

## 🛠️ Technologies Utilisées

### Frontend
- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn/UI** - Composants UI modernes
- **Lucide React** - Icônes vectorielles
- **Framer Motion** - Animations fluides

### Outils de Développement
- **ESLint** - Linting du code
- **PostCSS** - Traitement CSS
- **Autoprefixer** - Compatibilité navigateurs
- **Git** - Contrôle de version

## 📁 Structure du Projet

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   └── photo_euloge.jpg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   └── ...
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navigation.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
├── README.md
└── AUTHOR.md
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- pnpm (gestionnaire de paquets)

### Installation
```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd portfolio

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm run dev
```

### Scripts Disponibles
```bash
# Développement
pnpm run dev

# Build de production
pnpm run build

# Prévisualisation du build
pnpm run preview

# Linting
pnpm run lint
```

## 🎨 Personnalisation

### Couleurs du Thème
Les couleurs principales sont définies dans `src/App.css` :
- **Primary** : `#00e6ff` (Cyan néon)
- **Secondary** : `#005f99` (Bleu foncé)
- **Background** : `#000814` (Bleu très foncé)
- **Accent** : `#00e6ff` (Cyan néon)
- **Destructive** : `#ff006e` (Rose néon)

### Animations
Les animations personnalisées sont définies dans `src/App.css` :
- `animate-float` - Animation flottante
- `animate-glow` - Effet de lueur pulsante
- `animate-typing` - Effet de frappe
- `hover-glow` - Effet de lueur au survol

### Contenu
Pour modifier le contenu :
1. **Informations personnelles** : Modifier les composants dans `src/components/sections/`
2. **Images** : Remplacer les fichiers dans `src/assets/`
3. **Projets** : Éditer le tableau `projects` dans `Projects.jsx`
4. **Compétences** : Modifier `skillCategories` dans `Skills.jsx`

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## ⚡ Optimisations

### Performance
- **Lazy loading** des composants
- **Optimisation des images** avec compression
- **Code splitting** automatique avec Vite
- **Minification** CSS et JavaScript
- **Bundle size** optimisé

### SEO
- **Métadonnées** appropriées
- **Structure sémantique** HTML
- **Alt text** pour les images
- **Sitemap** généré automatiquement
- **Open Graph** tags

## 🌐 Déploiement

Le portfolio est déployé sur : **https://igkufcbi.manus.space**

### Déploiement Local
```bash
# Build de production
pnpm run build

# Le dossier dist/ contient les fichiers prêts pour le déploiement
```

### Plateformes de Déploiement Supportées
- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

## 🔧 Améliorations Futures

### Fonctionnalités Prévues
- [ ] Mode sombre/clair complet
- [ ] Système de blog intégré
- [ ] Galerie de photos interactive
- [ ] Intégration avec des APIs externes
- [ ] Progressive Web App (PWA)
- [ ] Système de commentaires
- [ ] Analytics intégrés
- [ ] Multilangue (FR/EN)

### Optimisations Techniques
- [ ] Service Worker pour le cache
- [ ] Optimisation des Core Web Vitals
- [ ] Tests automatisés
- [ ] CI/CD pipeline
- [ ] Monitoring des performances
- [ ] Compression des assets

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**MABIALA EULOGE JUNIOR**
- **Portfolio :** [https://igkufcbi.manus.space](https://igkufcbi.manus.space)
- **GitHub :** [@eulogep](https://github.com/eulogep)
- **Email :** mabiala@et.esiea.fr
- **LinkedIn :** [Euloge Mabiala](https://linkedin.com/in/euloge-mabiala)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou suggestion, n'hésitez pas à :
- Ouvrir une issue sur GitHub
- Me contacter via le formulaire du portfolio
- M'envoyer un email à mabiala@et.esiea.fr

## 🙏 Remerciements

- **Shadcn/UI** pour les composants de base
- **Lucide React** pour les icônes
- **Tailwind CSS** pour le framework CSS
- **Vite** pour l'outil de build
- **React** pour le framework JavaScript

---

*Développé avec ❤️ et beaucoup de café ☕ par MABIALA EULOGE JUNIOR*

*Dernière mise à jour : Décembre 2024*

