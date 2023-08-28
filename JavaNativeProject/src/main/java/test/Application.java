package test;

import metier.Compte;

public class Application {
    public static void main(String[] args) {
        Compte c1=new Compte(1, 5000);
        Compte c2=new Compte(2, 6000);
        c1.verser(3000);
        c1.retirer(2000);
        System.out.println(c1.toString());
    }
}
