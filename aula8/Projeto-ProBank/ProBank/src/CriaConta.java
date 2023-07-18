package ProBank;

public class CriaConta {
	
	public static void main(String[] args) {
		
		Conta primeiraConta = new Conta();
		primeiraConta.saldo = 200;
		System.out.println("o saldo e: " + primeiraConta.saldo + "R$");
		primeiraConta.saldo += 100;
		System.out.println("o novo saldo e: " + primeiraConta.saldo + "R$");
		
		System.out.println();
		
		Conta segundaConta = new Conta();
		segundaConta.saldo = 75;
		System.out.println("o saldo da segunda conta e: " + segundaConta.saldo + "R$");
		
		System.out.println();
		
		
	}
}
