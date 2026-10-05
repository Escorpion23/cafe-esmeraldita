# Script para extraer los colores dominantes de las imágenes de café
import os
import sys
from PIL import Image

# Forzar salida UTF-8
sys.stdout.reconfigure(encoding='utf-8')

def get_dominant_colors(image_path, num_colors=6):
    """Extrae los colores dominantes de una imagen."""
    img = Image.open(image_path)
    # Reducir tamaño para acelerar el procesamiento
    img = img.resize((150, 150))
    img = img.convert('RGB')
    
    # Cuantizar colores para agrupar tonos similares
    img = img.quantize(colors=32, method=Image.MEDIANCUT)
    
    # Obtener los colores más comunes
    palette = img.getpalette()
    color_counts = sorted(img.getcolors(), reverse=True)
    
    colors = []
    for count, index in color_counts[:num_colors]:
        r, g, b = palette[index*3:index*3+3]
        hex_color = '#{:02X}{:02X}{:02X}'.format(r, g, b)
        colors.append((hex_color, count))
    
    return colors

print("=" * 60)
print("ANALISIS DE COLORES DE LAS IMAGENES DE CAFE")
print("=" * 60)

img_dir = 'img'
for filename in sorted(os.listdir(img_dir)):
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        filepath = os.path.join(img_dir, filename)
        print(f"\n[IMAGEN] {filename}")
        print("-" * 60)
        try:
            colors = get_dominant_colors(filepath)
            for hex_color, count in colors:
                print(f"  {hex_color}  (frecuencia: {count})")
        except Exception as e:
            print(f"  Error: {e}")

print("\n" + "=" * 60)
print("ANALISIS COMPLETADO")
print("=" * 60)
