export class Animal{
    constructor(urlImage, nom, description, paysNatal){
        this.urlImage = urlImage
        this.nom = nom
        this.description = description
        this.paysNatal = paysNatal
    }

    get  urlImage() {
        return this.urlImage;
      }

    set urlImage(urlImage){
        this.urlImage = urlImage
    }

    get  nom() {
        return this.nom;
      }

    set nom(nom){
        this.nom = nom
    }

    get  description() {
        return this.description;
      }

    set description(description){
        this.description = description
    }

    get  paysNatal() {
        return this.paysNatal;
      }

    set paysNatal(paysNatal){
        this.paysNatal = paysNatal
    }
}
