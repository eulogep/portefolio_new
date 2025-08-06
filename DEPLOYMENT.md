# Guide de Déploiement - GitHub Pages

Ce guide vous explique comment déployer votre portfolio sur GitHub Pages.

## 🚀 Déploiement Automatique (Recommandé)

### 1. Préparation du Repository

1. **Créez un repository GitHub** nommé `portfolio`
2. **Poussez votre code** vers le repository :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/eulogep/portfolio.git
   git push -u origin main
   ```

### 2. Configuration GitHub Pages

1. **Allez dans les paramètres du repository** (Settings)
2. **Scrollez jusqu'à la section "Pages"**
3. **Dans "Source", sélectionnez "GitHub Actions"**
4. **Le workflow se déclenchera automatiquement** à chaque push sur la branche main

### 3. URL de votre Portfolio

Votre portfolio sera accessible à l'adresse :
```
https://eulogep.github.io/portfolio
```

## 🔧 Déploiement Manuel

Si vous préférez déployer manuellement :

### 1. Installation des dépendances
```bash
npm install
```

### 2. Build du projet
```bash
npm run build
```

### 3. Déploiement
```bash
npm run deploy
```

## 📝 Configuration

### Variables d'environnement
Aucune variable d'environnement n'est nécessaire pour ce projet.

### Base URL
Le projet est configuré pour fonctionner avec l'URL de base `/portfolio/`. Si vous changez le nom du repository, mettez à jour :

1. **package.json** : ligne `"homepage"`
2. **vite.config.js** : ligne `base: '/portfolio/'`

## 🔍 Vérification

Après le déploiement, vérifiez que :
- ✅ Le site est accessible
- ✅ Toutes les images se chargent
- ✅ Les animations fonctionnent
- ✅ Le responsive design fonctionne
- ✅ Les liens de navigation marchent

## 🛠️ Dépannage

### Problèmes courants :

1. **404 sur les routes** : Vérifiez que la base URL est correcte
2. **Images qui ne se chargent pas** : Vérifiez les chemins dans `src/assets/`
3. **Styles qui ne s'appliquent pas** : Vérifiez que Tailwind CSS est bien configuré

### Logs de déploiement
Consultez les logs dans l'onglet "Actions" de votre repository GitHub.

## 📞 Support

Pour toute question concernant le déploiement :
- **Email** : mabiala@et.esiea.fr
- **GitHub Issues** : Ouvrez une issue sur le repository

---

*Dernière mise à jour : Décembre 2024* 