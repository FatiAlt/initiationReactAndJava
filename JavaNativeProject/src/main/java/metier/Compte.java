package metier;

public class Compte {
    //atrributs
    private int code;
    protected float solde;
    //constructeur
    public Compte (int c, float s) {
        code=c;
        solde=s;
    }
    //methode pour verser un mntant
    public void verser (float mt) {
        solde+=mt;
    }
    //methode pour retirer un montant
    public void retirer (float mt){
        solde-=mt;
    }
    //methode qui retourne l'état


    public String toString() {
        return (" Code="+code+" Solde="+solde);
    }
}