# Salomon Moussinga Formation — site vitrine

Site statique d'une page (HTML/CSS/JS, sans build) pour la formation
« L'art de manager, de protéger et d'inspirer ».

## Contenu du dossier

```
index.html            page unique
assets/css/styles.css  styles
assets/js/main.js      interactions (header, menu mobile, révélation au scroll, formulaire démo)
assets/img/            photos + logo
.nojekyll              désactive Jekyll sur GitHub Pages
```

Toutes les URL sont relatives : le site fonctionne à la racine d'un domaine
comme dans un sous-dossier (`https://<user>.github.io/<repo>/`).

## Publier sur GitHub Pages

### Option A — sans ligne de commande
1. Créer un dépôt sur GitHub (ex. `salomon-moussinga-formation`).
2. **Add file → Upload files** : déposer le **contenu** de ce dossier
   (`index.html`, `assets/`, `.nojekyll`) — pas le dossier lui-même.
3. Commit.
4. **Settings → Pages** : *Source* = `Deploy from a branch`, branche `main`,
   dossier `/ (root)` → **Save**.
5. L'URL publique apparaît au bout d'une minute.

### Option B — en ligne de commande
```bash
cd site
git init
git add .
git commit -m "Site Salomon Moussinga Formation"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```
Puis **Settings → Pages** comme à l'étape 4 ci-dessus.

## Tester en local

```bash
python -m http.server 4315
```
puis ouvrir http://localhost:4315

## À compléter avant mise en ligne définitive

Adresse e-mail · connexion réelle du formulaire de devis · témoignages ·
parcours détaillé de l'intervenant · tarifs · mentions légales · éventuel
label Qualiopi. Ces zones sont signalées sur la page par des notes en pointillé.
