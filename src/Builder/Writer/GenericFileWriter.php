<?php
declare(strict_types=1);

namespace Hostnet\Component\Resolver\Builder\Writer;


use Hostnet\Component\Resolver\Builder\AbstractWriter;

class GenericFileWriter extends AbstractWriter
{
    public function acceptedExtension(): string
    {
        return '*';
    }

    public function getJsModule(): string
    {
        return __DIR__ . '/../js/writers/generic.js';
    }
}
