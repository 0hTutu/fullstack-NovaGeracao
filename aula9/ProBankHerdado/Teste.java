package ProBankHerdado;

public class Teste {

	public static void main(String[] args) {
		
		FuncionarioTeste f1 = new FuncionarioTeste();
		
		f1.setSalario(3000);
		System.out.println(f1.getSalario());
		System.out.println(f1.getTipo());
		System.out.println(f1.getBonificacao());
	}
}
