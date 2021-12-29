<?php


$header = <<<EOF
(c) Fluxter <http://fluxter.net/>
You are not allowed to see or use this code if you are not a part of Fluxter!
EOF;

$finder = PhpCsFixer\Finder::create()
    ->exclude([
        'vendor',
        'node_modules',
        'var',
    ])
    ->in(__DIR__ . '/src/');

return (new PhpCsFixer\Config())
    ->setRules([
        '@Symfony' => true,
        'array_syntax' => ['syntax' => 'short'],
        'combine_consecutive_unsets' => true,
        'header_comment' => ['header' => $header],
        'linebreak_after_opening_tag' => true,
        'no_php4_constructor' => true,
        'no_useless_else' => true,
        'ordered_class_elements' => true,
        'ordered_imports' => true,
        'php_unit_construct' => true,
        'php_unit_strict' => true,
        'phpdoc_no_empty_return' => false,
        'concat_space' => ['spacing' => 'one'],
    ])
    ->setUsingCache(false)
    ->setRiskyAllowed(true)
    ->setFinder($finder)
;
