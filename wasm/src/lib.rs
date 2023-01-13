use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;
use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
pub fn image_function(encoded_file: &str, function: &str) -> String {

    let base64_to_vector = decode(encoded_file).unwrap();
    let mut img = load_from_memory(&base64_to_vector).unwrap();

    match function {
        "blur" => img = img.blur(5 as f32),
        "grayscale" => img = img.grayscale(),
        "rotate90" => img = img.rotate90(),
        "rotate180" => img = img.rotate180(),
        "flip_vertical" => img = img.flipv(),
        "flip_horizontal" => img = img.fliph(),
        _ => img = img
    }

    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();

    let encoded_img = encode(&buffer);
    let data_url = format!(
        "data:image/png;base64,{}", encoded_img
    );

    return data_url
}
