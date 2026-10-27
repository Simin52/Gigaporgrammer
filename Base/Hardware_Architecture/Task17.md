# Вариант 17: решения задач

## Задача 1

**Дано:** $\overline{\overline{(X > 2)}} \vee \overline{(X > 3)}$, при $X = 3$.
**Решение:**

- По закону двойного отрицания первая часть упрощается: $\overline{\overline{(X > 2)}} = X > 2$;
- Подставим значение $X = 3$ в первую часть: $3 > 2 \Rightarrow$ истина;
- Подставим значение $X = 3$ во вторую часть: $3 > 3 \Rightarrow$ ложь;
- Вычислим инверсию для второй части: $\overline{\text{ложь}} \Rightarrow$ истина;
- Итоговое выражение: истина $\vee$ истина $=$ истина.

**Ответ:** 1.

---

## Задача 2

**Дано:** «Если две точки прямой находятся в некоторой плоскости, то эта прямая лежит в этой плоскости».
**Решение:**

- По определению и основным аксиомам стереометрии (аксиома А2), если две различные точки прямой принадлежат плоскости, то и вся прямая принадлежит этой плоскости;
- Данное утверждение полностью совпадает с фундаментальной геометрической аксиомой;
- Следовательно, высказывание является истинным.

**Ответ:** утверждение истинно.

---

## Задача 3

**Дано:** $\overline{(\overline{X} \vee \overline{Y})} \rightarrow (X \wedge Z) \wedge (\overline{X} \rightarrow Y)$.
**Решение:**

- Применим закон Де Моргана к левой части: $\overline{(\overline{X} \vee \overline{Y})} = X \wedge Y$;
- Раскроем импликацию в правой части выражения: $\overline{X} \rightarrow Y = X \vee Y$;
- Перепишем правую часть с учетом преобразования: $(X \wedge Z) \wedge (X \vee Y)$;
- По закону поглощения для конъюнкции $X \wedge (X \vee Y) = X$, тогда правая часть упрощается до: $X \wedge Z$;
- Получаем эквивалентное выражение: $(X \wedge Y) \rightarrow (X \wedge Z)$;
- Раскроем внешнюю импликацию: $\overline{(X \wedge Y)} \vee (X \wedge Z) = \overline{X} \vee \overline{Y} \vee (X \wedge Z)$;
- Применим закон поглощения $\overline{X} \vee (X \wedge Z) = \overline{X} \vee Z$.

**Ответ:** $\overline{X} \vee \overline{Y} \vee Z$.

---

## Задача 4

**Дано:** $\overline{(\overline{B} \vee A)} \wedge (\overline{A} \vee \overline{B})$.
**Решение:**

- Раскрываем инверсию в первой скобке по закону Де Моргана: $\overline{(\overline{B} \vee A)} = B \wedge \overline{A}$;
- Подставляем в общее выражение: $(B \wedge \overline{A}) \wedge (\overline{A} \vee \overline{B})$;
- Раскрываем скобки по закону распределения (дистрибутивности): $(B \wedge \overline{A} \wedge \overline{A}) \vee (B \wedge \overline{A} \wedge \overline{B})$;
- Упрощаем первую часть по закону идемпотентности ($\overline{A} \wedge \overline{A} = \overline{A}$), получаем $B \wedge \overline{A}$;
- Вторая часть превращается в ложь, так как содержит противоречие ($B \wedge \overline{B} = 0$);
- Итоговый вид: $(B \wedge \overline{A}) \vee 0 = B \wedge \overline{A}$.

**Ответ:** $\overline{A} \wedge B$.

---

## Задача 5: построение таблицы истинности

**Дано:** $((\overline{X} \rightarrow Y) \wedge (\overline{Y} \rightarrow \overline{X})) \rightarrow \overline{X}$.

| $X$ | $Y$ | $\overline{X}$ | $\overline{Y}$ | $\overline{X} \rightarrow Y$ | $\overline{Y} \rightarrow \overline{X}$ | $(\overline{X} \rightarrow Y) \wedge (\overline{Y} \rightarrow \overline{X})$ | Результат |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 1 | 1 | 0 | 1 | 0 | **1** |
| 0 | 1 | 1 | 0 | 1 | 1 | 1 | **1** |
| 1 | 0 | 0 | 1 | 1 | 0 | 0 | **1** |
| 1 | 1 | 0 | 0 | 1 | 1 | 1 | **0** |

**Финальный ответ:** выражение не является тождественно истинным (принимает значение 0 при $X = 1, Y = 1$), упрощённый вид выражения: $\overline{X} \vee \overline{Y}$ (или $\overline{X \wedge Y}$).