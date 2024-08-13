import { Select } from "../../../components/ui/select";

type FormatSelectorProps = {
  format: string;
  onFormatChange: (format: string) => void;
  disabled: boolean;
};

export const FormatSelector = (props: FormatSelectorProps) => {
  const { format, onFormatChange, disabled } = props;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-foreground-muted">Converter para:</span>
      <Select.Root
        value={format}
        onValueChange={onFormatChange}
        disabled={disabled}
      >
        <Select.Trigger className="w-[100px]">
          <Select.Value placeholder="..." />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Item value="bmp">bmp</Select.Item>
            <Select.Item value="gif">gif</Select.Item>
            <Select.Item value="ico">ico</Select.Item>
            <Select.Item value="jpeg">jpeg</Select.Item>
            <Select.Item value="jpg">jpg</Select.Item>
            <Select.Item value="png">png</Select.Item>
            <Select.Item value="tga">tga</Select.Item>
            <Select.Item value="tif">tif</Select.Item>
            <Select.Item value="tiff">tiff</Select.Item>
            <Select.Item value="webp">webp</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
};
