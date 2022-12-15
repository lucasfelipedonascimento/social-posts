# Programação imperativa

O que deve ser feito (passo-apasso).

## Receita para fritar um ovo

1. Pega uma assadeira
2. Pega um ovo
3. COloca a assadeira no fogão
4. ...

# Programação declarativa

Quais as condições para eu ter o resultado final.

## Receita para fritar um ovo

1. Quando a assadeira estiver no fogo e a manteiga derretida
2. ...O

# Key no React

## Por que única?

3 principais momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;

2. Quando a propriedade altera;

3. Quando um componente pai renderiza novamente;

---

Key -> Quando o react for renderizar novamente, ele com a KEY ÚNICA, consegue perceber o que já foi renderizado
com isso ele não precisa renderizar novamente.

Por exemplo:

1, 2, 3, 4 -> Última renderização do React

1, 2, 3, 4, 5 -> Quando eu mudo algo e ele for renderizar novamente, ele observa o que mudou e o que não mudou
no caso acima ele já tinha o (1, 2, 3, 4) e só recebeu o (5), então nesse caso ele só renderiza o 5, pois foi a única
coisa que mudou e por isso ela DEVE SER ÚNICA.

## Por que não posso usar o índice do array?

```js
const posts = [1, 2, 3, 4, 5];
// 0, 1, 2, 3, 4
```

O índice não muda, ou seja, se eu mudo a posição do elemento 1 com o elemento 2, o React não vai perceber que foi só uma
mudança de lugar entre os mesmos elementos já existente e irá renderizar tudo novamente.

# Closures no React

Sempre que for atualizar uma informação, e essa informação depende do valor que ela tinha anteriormente, é sempre legal fazer 
atualização, utilizando o padrão a seguir:
```js
function handleLikeComment() {
  setLikeCount((state) => {
    return state + 1
  })

  setLikeCount((state) => {
    return state + 1
  })
}
```
