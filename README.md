![header](https://capsule-render.vercel.app/api?type=waving&color=FF6161&section=header&height=250&text=나만의%20포켓몬%20도감&fontColor=FFFFFF&fontAlignY=40)

### 😺 포켓몬 도감 만들기
<br/>

#### 과제 진행 순서
- vite 사용하여 React 프로젝트 생성
- 사이트 구조 파악하고 페이지, 컴포넌트 계층 나누기
- RRD 사용 - App.jsx에 라우터 연결하기
- Router.jsx 에서 각 주소에 대해 컴포넌트 연결하기
- 위에서 연결한 Home, Dex, Detail 컴포넌트 구조 짜기
- 각 페이지마다 파일 내부에서 컴포넌트 분리하고 스타일 적용하기
- 분리한 컴포넌트로 파일 생성하여 export, import하여 적용하기
- selectPokemon 상태 생성하고 추가, 삭제 로직 구현하기
- 대시보드 내부에 들어가는 포켓볼 갯수 유동적으로 조정하는 로직 작성
- navigate 로 이동하는 버튼 만들어주기 (Home, Detail)
- context API 리팩토링 : context 브랜치
- 리덕스 툴킷 리팩토링 : redux-toolkits 브랜치
  <br/>
  <br/>
### 주요 기능
- #### 포켓몬 도감에 추가하기
```
addPokemon: (state, action) => {
      const pokemon = action.payload;
      if (state.selectPokemon.some((p) => p.id === pokemon.id)) {
        Swal.fire({
          text: "같은 포켓몬은 중복으로 등록할 수 없습니다!",
          icon: "warning",
        });
      } else if (state.selectPokemon.length >= 6) {
        Swal.fire({
          text: "더 이상 포켓몬을 등록할 수 없습니다!",
          icon: "error",
        });
      } else if (pokemon.fromDetail) {
        state.selectPokemon.push(pokemon);
        localStorage.setItem(
          "selectPokemon",
          JSON.stringify(state.selectPokemon)
        );
        Swal.fire({
          text: "포켓몬이 성공적으로 추가되었습니다!",
          icon: "success",
        });
      } else {
        state.selectPokemon.push(pokemon);
        localStorage.setItem(
          "selectPokemon",
          JSON.stringify(state.selectPokemon)
        );
      }
    }
```
> Dex 페이지 내에 있는 리스트에서 추가 버튼을 누를 경우 카드의 css가 변경되어 추가되었음을 확인할 수 있는 반면,<br/>
> 디테일 페이지에서 추가를 눌렀을 때에는 뒤로가기를 하지 않으면 확인할 방법이 없어 디테일 페이지에서만 alert을 띄우고자 했다.<br/>
```
 const handleAdd = () => {
    const addFrom = { ...detailPokemon, fromDetail: true };
    dispatch(addPokemon(addFrom));
  };
```
> 그래서 detail 페이지 내에서 추가 버튼을 누르면 기존의 포켓몬 정보에 fromDetail: true 값이 추가된 객체가 넘어가도록 했다.<br/>
> 중복, 최대 개수 확인 등의 조건문 뒤에 fromDetail 조건을 걸어 디테일 페이지에서 추가를 눌렀을 경우 alert을 띄우는 것으로 해결했다.

#### 🚨 해당 과정에서 겪은 어려움

코드에서도 확인할 수 있듯이 리덕스 툴킷으로 리팩토링 하기 전에는 삼항연산자 여러개와 쉼표 연산자(단일 표현식을 요구하는 곳에서 여러개의 표현식을 사용하고 싶을 때 사용)로 alert과 함께 불리언을 반환하는 로직을 사용했다. <br/>
그런데 리덕스 툴킷으로 리팩토링 하면서 ture, false값이 제대로 넘어오지 않아 해당 기능이 작동하지 않았다. 튜터님의 도움을 받아 식을 if문으로 변경하고 디테일 페이지에서 fromDetail을 넘겨주는 것으로 수정했다. <br/>
이 과정에서 여러개의 조건식을 삼항연산자로 사용하는 것은 가독성이 좋지 않아 가능하면 if else로 작성하는 것이 좋으며 쉼표 연산자 또한 거의 사용하지 않는 것이라는 걸 알았다. <br/>
아무래도 경험과 기초가 부족해서.. 어 뭐야 써봤는데 되네? 하며 왜 되는지 제대로 알아보지 않아서 이런 오류에 부딪힌 것 같다. 앞으론 잘 알아보고 사용해야겠다🥹

<br/>

- #### 등록된 포켓몬 개수에 따라 포켓볼 개수 조절하기
```
   {Array.from({ length: maxPokemonCount - selectPokemon.length }).map(
          (_, index) => (
            <PokeBall
              key={`ball-${index}`}
              src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png"
            />
          )
        )}
```
> 포켓볼 6개를 대시보드에 넣고 포켓몬을 등록하면 포켓볼이 6개가 찌그러지며 포켓몬이 등록되었다.<br/>

> 6개짜리 포켓볼 배열을 만들고 포켓몬을 추가하면 바꿔치기해야하나..? 이렇게 생각했다가 어차피 selectPokemon을 state로 만들어 놨으니까 그 길이에 따라서 포켓볼을 유동적으로 만들어 넣는게 덜 복잡하겠다 싶어서 이렇게 코드를 작성했다. <br/>

> Array.from 으로 쌩 배열은 처음 만들어 봤는데 내용 없이 길이만 필요한 거라 어렵지 않게 할 수 있었다.<br/>
> maxPokemonCount = 6 이고 (6 - 선택된 포켓몬 수) 만큼의 배열이 만들어 진다. 이걸 map으로 돌려서 포켓볼로 채워줬다.

<br/>

- #### 조건부 스타일링
```
const Name = styled.p`
  font-size: 33px;
  margin-top: 10px;
  background: ${(props) =>
    props.type.length > 1
      ? `linear-gradient(45deg, ${getTypeColor(props.type[0])}, ${getTypeColor(
          props.type[1]
        )})`
      : getTypeColor(props.type[0])};
  background-clip: text;
  color: transparent;
`;
```
> 이건 기능은 아니지만 만들고 뿌듯했던 거라 넣었다.<br/>
Name 스타일 컴포넌트에 props로 type을 내려주었고, 타입이 2개 이상이면 첫번째 타입과 두번째 타입이 그라데이션 되도록 설정하고 타입이 한개일 경우 해당 타입 색상으로만 나타날 수 있게 설정했다.

> getTypeColor 는 포켓몬 타입을 색상으로 변환해주는 함수. case 18개짜리 switch...

<br/>
 
#### 과제를 마치며...
생각보다 styled components 사용하는 게 너무 재미있었다. 물론 파일안의 코드가 길어지는게 조금 슬펐지만 요소마다 class값을 따로 지정해주지 않아도 돼서 너무너무 편했다!! 조건부 스타일링도 처음 해봤는데 너무 재미있어서 계속 css만 만지고 싶었음.

리팩토링은... 처음해보는 거라 많이 버벅이긴 했지만 완성은 할 수 있어서 기뻤다. 그 과정에서 무수히 많은 오류들과.. 콘솔로그 이상하게 찍어서 코드 꼬이기 등등.. 사건사고가 있었지만, 코드를 날리거나 하지는 않았으니까...^^!

그래도 context는 이해가 되는데 리덕스 툴킷은 강의도 다시 보고 인터넷 검색도 하고 ai의 도움을 받으면서도......................... 

그리고 이런 오류도 봤다.
> Error: [Immer] An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.
> ![image](https://github.com/user-attachments/assets/d0ffdcb9-806f-4be5-9225-d6bd67008d8c)

왜 이렇게 헷갈리고 어렵게 해놓은 건지 모르겠지만 addPokemon 안에서 return 을 잘못 사용하여 일어난 오류였다. [알잘딱으로 설명된 블로그](https://velog.io/@ohy9205/redux-toolkit-Immer-An-immer-producer-returned-a-new-value-and-modified-its-draft.-Either-return-a-new-value-or-modify-the-draft)

이젠 팀 프로젝트로 들어가야 하는데 피해 안 주고 잘할 수 있을까 걱정된다...🥹
