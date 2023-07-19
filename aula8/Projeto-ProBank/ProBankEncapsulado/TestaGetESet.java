package ProBankEncapsulado;

public class TestaGetESet {
	
	public static void main(String[] args) {
		
		Conta conta = new Conta(168, 9927);
		//conta.numero = 9927;
		//conta.setNumero(9927);
		System.out.println(conta.getNumero());
		
		Cliente paulo = new Cliente();
		//conta.titular = Paulo
		
		paulo.setNome("Paulo Mauricio");
		
		conta.setTitular(paulo);
		
		System.out.println(conta.getTitular().getNome());
		
		conta.getTitular().setProfissao("Bancario");
		
		
	}
}
