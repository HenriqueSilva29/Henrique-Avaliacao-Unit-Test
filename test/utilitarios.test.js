const Utilitarios = require("../src/utilitarios");

describe("Testes da classe Utilitarios", () => {
  let util;

  beforeEach(() => {
    util = new Utilitarios();
  });

  test("inverterString deve inverter a string", () => {
    expect(util.inverterString("abc")).toBe("cba");
  });

  test("contarCaracteres deve retornar o número de caracteres", () => {
    expect(util.contarCaracteres("OpenAI")).toBe(6);
  });

  test("paraMaiusculas deve converter para maiúsculas", () => {
    expect(util.paraMaiusculas("teste")).toBe("TESTE");
  });

  test("paraMinusculas deve converter para minúsculas", () => {
    expect(util.paraMinusculas("TESte")).toBe("teste");
  });

  test("primeiraLetraMaiuscula deve tornar a primeira letra maiúscula", () => {
    expect(util.primeiraLetraMaiuscula("openai")).toBe("Openai");
  });

  test("somar deve retornar a soma correta", () => {
    expect(util.somar(3, 4)).toBe(7);
  });

  test("subtrair deve retornar a subtração correta", () => {
    expect(util.subtrair(10, 3)).toBe(7);
  });

  test("multiplicar deve retornar a multiplicação correta", () => {
    expect(util.multiplicar(2, 5)).toBe(10);
  });

  test("dividir deve retornar a divisão correta", () => {
    expect(util.dividir(10, 2)).toBe(5);
  });

  test("dividir deve lançar erro ao dividir por zero", () => {
    expect(() => util.dividir(10, 0)).toThrow("Divisão por zero");
  });

  test("ehPar deve retornar true para números pares", () => {
    expect(util.ehPar(4)).toBe(true);
  });

  test("ehPar deve retornar false para números ímpares", () => {
    expect(util.ehPar(3)).toBe(false);
  });

  test("primeiroElemento deve retornar o primeiro elemento", () => {
    expect(util.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test("ultimoElemento deve retornar o último elemento", () => {
    expect(util.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test("ordenarArray deve ordenar corretamente", () => {
    expect(util.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("inverterArray deve inverter o array", () => {
    expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("removerEspacos deve remover espaços antes e depois", () => {
    expect(util.removerEspacos("  texto  ")).toBe("texto");
  });

  test("ehPalindromo deve retornar true para palíndromos", () => {
    expect(util.ehPalindromo("Ame a ema")).toBe(true);
  });

  test("mediaArray deve retornar a média correta", () => {
    expect(util.mediaArray([1, 2, 3, 4])).toBe(2.5);
  });

  test("removerDuplicados deve remover elementos duplicados", () => {
    expect(util.removerDuplicados([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  test("gerarNumeroAleatorio deve gerar número entre 0 e 99 por padrão", () => {
    const num = util.gerarNumeroAleatorio();
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(100);
  });
  
  test("gerarNumeroAleatorio deve gerar número abaixo do valor passado", () => {
    const num = util.gerarNumeroAleatorio(10);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(10);
  });
  
  test("juntarArray deve juntar elementos com vírgula por padrão", () => {
    expect(util.juntarArray(["a", "b", "c"])).toBe("a,b,c");
  });
  
  test("juntarArray deve juntar com separador customizado", () => {
    expect(util.juntarArray(["a", "b", "c"], "-")).toBe("a-b-c");
  });
  
  test("contarPalavras deve contar corretamente palavras separadas por espaço", () => {
    expect(util.contarPalavras("um dois três")).toBe(3);
  });
  
  test("contarPalavras deve ignorar espaços extras", () => {
    expect(util.contarPalavras("   um   dois   ")).toBe(2);
  });
  
  test("mediaArray deve retornar 0 para array vazio", () => {
    expect(util.mediaArray([])).toBe(0);
  });
  
  test("mesclarObjetos deve mesclar dois objetos corretamente", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    expect(util.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2 });
  });
  
  test("mesclarObjeto deve sobrescrever valores duplicados do segundo objeto", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(util.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });
});
