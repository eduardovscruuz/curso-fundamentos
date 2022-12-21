class Carro{
    constructor(modelo, placa, ano, cor, quilometragem, valor_diario, observacao) {
        this.modelo = modelo;
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
        this.quilometragem = quilometragem;
        this.valor_diario = valor_diario;
        this.observacao = observacao;
    }
}
class Esportivo extends Carro{
    constructor(modelo, placa, ano, cor, quilometragem, valor_diario, observacao, tempo, melhorias) {
        super(modelo, placa, ano, cor, quilometragem, valor_diario, observacao);
        this.tempo = tempo;
        this.melhororias = melhorias
    }
}
class Utilitario extends Carro{
    constructor(modelo, placa, ano, cor, quilometragem, valor_diario, observacao, quantidade_passageiros, tamanho_bagageiro, km_litro) {
        super(modelo, placa, ano, cor, quilometragem, valor_diario, observacao);
        this.quantidade_passageiros = quantidade_passageiros;
        this.tamanho_bagageiro = tamanho_bagageiro;
        this.km_litro = km_litro;
    }
}

class Reserva {
    constructor(cpf_cliente, status, dt_inicio, dt_fim) {
        this.cpf_cliente = cpf_cliente;
        this.status = status;
        this.dt_inicio = dt_inicio;
        this.dt_fim = dt_fim;
    }
}

class Promocao{
    constructor(titulo, descricao, dt_validade){
        this.titulo = titulo
        this.descricao = descricao
        this.dt_validade = dt_validade
    }
}

class Pessoa {
    constructor(nome, cpf, email, telefone, endereco){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, cpf, email, telefone, endereco, idade, dt_contratacao, salario, qd_alugueis_mes = 0, status = false) {
        super(nome, cpf, email, telefone, endereco);
        this.idade = idade;
        this.dt_contratacao = dt_contratacao;
        this.salario = salario;
        this.qd_alugueis_mes = qd_alugueis_mes;
        this.status = status;
    }
}
class Cliente extends Pessoa {
    constructor(nome, cpf, email, telefone, endereco, dt_nascimento, nu_carteira, foto_carteira, dt_vencimento_carteira){
        super(nome, cpf, email, telefone, endereco)
        this.dt_nascimento = dt_nascimento
        this.nu_carteira = nu_carteira
        this.foto_carteira = foto_carteira
        this.dt_vencimento_carteira = dt_vencimento_carteira
    }
} 