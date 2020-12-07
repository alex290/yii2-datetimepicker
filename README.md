yii2-widget-datetimepicker
==========================
The DateTimePicker widget Yii2

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist alex290/yii2-datetimepicker "*"
```

or add

```
"alex290/yii2-datetimepicker": "*"
```

to the require section of your `composer.json` file.


Использование
-----

поле $datetime должен быть формата intiger

```php
<?= $form->field($model, 'datetime')->widget(alex290\datetimepicker\Datepicker::className(),[]) ?>```