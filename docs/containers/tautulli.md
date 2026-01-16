---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22537" onclick="CopyToClipboard('tag22537');return false;" class="tag-decoration">release</div><div id="tag27814" onclick="CopyToClipboard('tag27814');return false;" class="tag-decoration">release-19eeda0</div><div id="tag19666" onclick="CopyToClipboard('tag19666');return false;" class="tag-decoration">release-2.16.0</div><div id="tag17727" onclick="CopyToClipboard('tag17727');return false;" class="tag-decoration">release-v2</div><div id="tag18832" onclick="CopyToClipboard('tag18832');return false;" class="tag-decoration">release-v2.16</div><div id="tag15571" onclick="CopyToClipboard('tag15571');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/19eeda005c3df043ea76a8eed061f0dd9cf4b4fd" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21060555716" target="_blank">2026-01-16 08:34:11</a></td></tr>
<tr><td><div id="tag14155" onclick="CopyToClipboard('tag14155');return false;" class="tag-decoration">testing</div><div id="tag7178" onclick="CopyToClipboard('tag7178');return false;" class="tag-decoration">testing-013ad02</div><div id="tag6101" onclick="CopyToClipboard('tag6101');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag16551" onclick="CopyToClipboard('tag16551');return false;" class="tag-decoration">testing-v2</div><div id="tag16083" onclick="CopyToClipboard('tag16083');return false;" class="tag-decoration">testing-v2.16</div><div id="tag13489" onclick="CopyToClipboard('tag13489');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/013ad025a0d5f28f6814e0ac34b63b95ecb847b5" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21060555892" target="_blank">2026-01-16 08:34:11</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
