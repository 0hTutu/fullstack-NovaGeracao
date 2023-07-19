package ProBankComposto;

public class TestaContaSemCliente {
	public static void main(String[] args) {
		Conta conta3 = new Conta();
		System.out.println(conta3.getSaldo()); 

		conta3.titular = new Cliente();
		System.out.println(conta3.titular);
		
        conta3.titular.nome = "Marcela";
        System.out.println(conta3.titular.nome); 
	}
}
