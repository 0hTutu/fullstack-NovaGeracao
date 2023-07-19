package ProBankHerdado;

public class TesteFuncionario {

	public static void main(String[] args) {
		
		Funcionario nico = new Funcionario();
		nico.setNome("Nico Steppat");
		nico.setCpf("234589333");
		nico.setSalario(5000);
		System.out.println(nico.getNome());
		System.out.println(nico.getBonificacao());
	}
}
