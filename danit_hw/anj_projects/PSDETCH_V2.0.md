# PSDETCH v2.0

## Что такое PSDETCH?

PSDETCH  - это инструмент для работы с макетами, работающий в браузере как онлайн, так и оффлайн. Он поддерживает форматы psd, pdf и jpg и позволяет легко измерять расстояния между выделенными элементами, извлекать информацию о конкретных элементах, группировать их, экспортировать и т.д..

## Начало работы

Рассмотрим версию PSDETCH 2.0 на примере макетов Forkio.
Для начала работы на сайте https://psdetch.com/ нужно нажать “GOTO STUDIO”, выбираем версию 2 (“Back to V2”), нажать “Start”, “DROP DESIGN FILE HERE”:

![](https://drive.google.com/open?id=1jZEPtMbrVMGcCImzjGXRbIity5olbqd4)

Выбираем макет. 

![](https://drive.google.com/open?id=1FBGBwMRUH02C0LwYmwowrHwnVw4q2eAs)

## Одновременная работа с несколькими макетами

PSDETCH позволяет работать с несколькими макетами одновременно, что очень удобно при адаптивной верстке. Вверху страницы находится секция с вкладками. Для добавления нового макета нужно нажать на плюс и выбрать макет:

![](https://drive.google.com/open?id=1Mvv_CDHrB43e7D_RVmBPEbpHU1_NbkUT)

## Масштабирование

В правом нижнем углу находится область масштабирования макета.

![](https://drive.google.com/open?id=1f_wRo9y6mEd7FSXfnWRXmjvB8qmIsFbv)

Лупа увеличивает/уменьшает масштаб.
Scale не изменяет масштаб, а меняет сам размер макета в обратной пропорции.
Стандартное значение Scale: @1X.
На примере выделенного элемента:

![](https://drive.google.com/open?id=1TMXWTRMSjFeGLtQ4siMiTH9aUaArN7gl)
*(здесь Scale: @1X - ширина элемента 240px)*

![](https://drive.google.com/open?id=1wxzVMmdUF9EZv05E9JisVHJF-IP_YTLZ)
*(здесь Scale: @4X - ширина элемента 60px)*

## Перемещение макета
В левом нижнем углу области работы с макетом находятся инструменты. Переключение между ними происходит при клике на них или с помощью горячих клавиш:

![](https://drive.google.com/open?id=1vTyPoHx0jtix6kr0dAdWN-6L1DCapukx)

Инструмент “Рука” позволяет двигать макет. Также если выбран другой инструмент и неудобно постоянно менять его на “Руку”, передвигать макет можно зажав “Alt”.

## Работа с цветом

Инструмент “Пипетка” показывает цвет пикселя, на который наведена мышь, в небольшом дополнительном окне в формате HEX. При клике левой кнопкой мыши код цвета копируется в буфер обмена (что позволяет быстро вставить его в код) и сохраняется в отдельном окне “Colors”. При клике на цвет в этом окне, его код также сохраняется в буфер обмена. Это удобно, когда у макета небольшая цветовая палитра.

![](https://drive.google.com/open?id=1Dv3wBxRLdXFlJbxTlfFPJa80fmIlrCQI)

## Выделение элемента

Инструмент “Линейка” при наведении на элемент подсвечивает его синим цветом и показывает его ширину и высоту в пикселях.
При клике на элемент “Линейка” выделяет его красным.
Для измерения расстояния между элементами нужно выделить первый элемент и навести курсор на второй:

![](https://drive.google.com/open?id=1gYfQ89czjZWT85MnjoyOZDKbjaBcDUhO)

На примере выделено изображение и наведен курсор на текст “Steven Strange”.
Над каждым элементом в синем блоке отображается его ширина и высота в пикселях.
Жирные желтые линии отображают расстояние между элементами, прерывистые линии показывают границы большего элемента.

Как узнать паддинг?
На следующем примере выделен текст и наведен курсор на сиреневый блок.

![](https://drive.google.com/open?id=1SDkZfI9oMqeQgEZjC0qXKoI2symoLKgG)

На синем фоне отображаются размеры элементов, на черном - расстояния до внешнего края сиреневого блока (в данном случае паддинги).

Для выделения нескольких элементов сразу нужно зажать “Ctrl” и нажимать на элементы левой кнопкой мыши или просто зажать левую кнопку и потянуть.

#### Пример:

*выделение:*

![](https://drive.google.com/open?id=180cs4yx6Ay0WxzP6qJmTGPlvN4gkQaHI)

*результат:*

![](https://drive.google.com/open?id=1e3JAO-4Klp4vY6BDxXtmCNa6RaaaaOKU)

При группировании будет показан размер блока, в котором находятся все выбранные элементы.
 
![](https://drive.google.com/open?id=1KxVfPF0FaRCy5M_X3NAxHhlrQQJBQBoK)

## Работа с элементом

При клике на элемент справа появляется блок с информацией о нем и настройками для извлечения.

#### Пример выделения текстового элемента:

![](https://drive.google.com/open?id=1xvfHFiyLZVfoJJH8Tx7Jp3cNqjthnwFn)

Сверху находятся вкладки “Extract” (Извлечение) и “Info”.

### Вкладка “Extract” (открыта по умолчанию):

1. **Блок с выделенным элементом:**
Показывает его изображение png для извлечения и размеры
2. **Блок “TEXT”:**
	+ *Кнопка “COPY TEXT”* - при клике текст скопируется в буфер обмена
	+ *CSS свойства:* 
		+ шрифт (в данном случае Montserrat с жирным начертанием - Bold);
		+ размер шрифта (PSDETCH указывает его только в пунктах);
		+ цвет в формате rgba;
		+ выравнивание текста.
`Подсказка: если текст написан в одну строку, размер шрифта в пикселях можно понять, посмотрев на высоту выделенного блока.`
3. **Блок “RASTERIZED IMAGE STYLE”:**
Настройки элемента для экспорта
	+ *Overlay* - дает возможность поменять цвет элемента:
	![](https://drive.google.com/open?id=1J-Jkdf_WF7VvlBt4jq25cXL--hZqEHst)
	![](https://drive.google.com/open?id=1igK_4bLcj57mh1fkBjbyt1WdNh1DzqYb)
	+ *Opacity* - прозрачность
	+ *Crop (Mask)* - маска для обрезки изображения (в пикселях). “Top”, “Left” - отступы, “Width”, “Heidht” - высота и ширина. При комбинации этих свойств можно обрезать изображение для последующего экспорта на свой вкус. Пример:
	![](https://drive.google.com/open?id=1dOEBgyTvou0w-_cOWf1zM4LNv33VSB9c)
	*(здесь задан свой цвет, прозрачность и размеры маски)*
	+ *Export settings:*
		+ *“Scale:”* - увеличение изображения для экспорта (пропорционально), в данном случае Scale: @2X увеличит готовое изображение в 2 раза
		+ *“Export as:”* - выбор формата изображения (jpeg или png)
	+ *Кнопка “Export”* - сохранить готовое изображение.
	
### Вкладка “INFO”:

1. **Settings:**
	+ *Visual measurement* - использование непрозрачных пикселей для измерений вместо возможных черных пикселей на краях слоев (элементов), установлено по умолчанию
2. **Layer info:** информация об элементе
	+ имя
	+ тип
	+ расположение:
		+ “X” - отступ от левого края макета
		+ “Y” - отступ от верхнего края макета
		+ “W” - ширина элемента
		+ “H” - высота элемента

## Вырезание выбранной области

Инструмент “Вырезание” позволяет выделить область макета и работать с ней, как и с выделенным изображением, для дальнейшего экспорта:

![](https://drive.google.com/open?id=13L6VTaBuGtfKGONy4CcgR-TWTLRQ153-)

## Дерево файлов

Слева от области работы с макетом находится дерево всех элементов-составляющих макета.

![](https://drive.google.com/open?id=1BDob1FcFXFNyke5HNfxjxFlG-xop1TDK)

Не всегда получается выделить нужный элемент. Бывает, необходимо экспортировать изображение с макета, но этот элемент закрыт другим и до него не добраться. В “дереве” в папках разложены все элементы макета. При клике на элемент в “дереве” он выделяется на макете и с ним можно работать, как и при выделении мышью.
