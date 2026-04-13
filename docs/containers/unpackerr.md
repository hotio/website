---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag29304" onclick="CopyToClipboard('tag29304');return false;" class="tag-decoration">nightly</div><div id="tag10148" onclick="CopyToClipboard('tag10148');return false;" class="tag-decoration">nightly-7706b27</div><div id="tag22036" onclick="CopyToClipboard('tag22036');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/7706b279f47803d61c0320dd8081e62be793b08a" target="_blank">Version update: 3d8d8a2c3f694ce6a4b1c4ba5caeb80e88de3675 => d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/24359522628" target="_blank">2026-04-13 18:17:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26825" onclick="CopyToClipboard('tag26825');return false;" class="tag-decoration">release</div><div id="tag19618" onclick="CopyToClipboard('tag19618');return false;" class="tag-decoration">release-d92585e</div><div id="tag6238" onclick="CopyToClipboard('tag6238');return false;" class="tag-decoration">release-0.15.2</div><div id="tag24310" onclick="CopyToClipboard('tag24310');return false;" class="tag-decoration">release-v0</div><div id="tag23739" onclick="CopyToClipboard('tag23739');return false;" class="tag-decoration">release-v0.15</div><div id="tag4279" onclick="CopyToClipboard('tag4279');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d92585eeea221d20f390b80ab3df12abd2d297c9" target="_blank">Version update: 0.15.0 => 0.15.2</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22829297109" target="_blank">2026-03-08 20:33:31</a></td></tr>
<tr><td><div id="tag26711" onclick="CopyToClipboard('tag26711');return false;" class="tag-decoration">testing</div><div id="tag27416" onclick="CopyToClipboard('tag27416');return false;" class="tag-decoration">testing-5845218</div><div id="tag13983" onclick="CopyToClipboard('tag13983');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag14792" onclick="CopyToClipboard('tag14792');return false;" class="tag-decoration">testing-v0</div><div id="tag5832" onclick="CopyToClipboard('tag5832');return false;" class="tag-decoration">testing-v0.15</div><div id="tag1652" onclick="CopyToClipboard('tag1652');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/5845218ff998138f18abf6857a6b8952b1a41b81" target="_blank">Version update: 0.15.0 => 0.15.2</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22829298045" target="_blank">2026-03-08 20:33:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
