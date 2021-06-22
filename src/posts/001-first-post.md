---
title: JS в деталях [Part 1]
date: 20 June 2021
descr: Рассмотрим типы переменных в JS
url: /js-in-details-part-1
---

<h3>Вступление</h3>
JavaScript-приложению обычно нужно работать с информацией. Например:

Интернет-магазин – информация может включать продаваемые товары и корзину покупок.
Чат – информация может включать пользователей, сообщения и многое другое.
Переменные используются для хранения этой информации.

<h3>Имена переменных</h3>
В JavaScript есть два ограничения, касающиеся имён переменных:

Имя переменной должно содержать только буквы, цифры или символы $ и \_.
Первый символ не должен быть цифрой.

```javascript
// Stores subsItems
export const $subsItems = createStore([
  { id: "1", name: "Netflix", price: 14.5, payment: 1, color: [66, 153, 118] },
])
  .on(addToSubsItems, (state, sub) => [...state, sub])
  .on(removeItemFromSubs, (state, subId) =>
    state.filter(item => item.id !== subId)
  )
  .on(editSubItem, (state, subObj) => {
    return state.map(sub => {
      if (sub.id === subObj.id) {
        sub = subObj
      }
      return sub
    })
  })
```
