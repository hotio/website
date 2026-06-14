---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag21865" onclick="CopyToClipboard('tag21865');return false;" class="tag-decoration">nightly</div><div id="tag4897" onclick="CopyToClipboard('tag4897');return false;" class="tag-decoration">nightly-0c3cde3</div><div id="tag12801" onclick="CopyToClipboard('tag12801');return false;" class="tag-decoration">nightly-3c922ee0875910dca8810114e9aa8d6a8b60973e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0c3cde385bfda89c66002c03ef89092e8ecb10e3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27428198840" target="_blank">2026-06-12 16:16:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23931" onclick="CopyToClipboard('tag23931');return false;" class="tag-decoration">release</div><div id="tag17331" onclick="CopyToClipboard('tag17331');return false;" class="tag-decoration">release-a0ab641</div><div id="tag12385" onclick="CopyToClipboard('tag12385');return false;" class="tag-decoration">release-5.0.4</div><div id="tag13682" onclick="CopyToClipboard('tag13682');return false;" class="tag-decoration">release-v5</div><div id="tag7873" onclick="CopyToClipboard('tag7873');return false;" class="tag-decoration">release-v5.0</div><div id="tag29630" onclick="CopyToClipboard('tag29630');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a0ab641838975e084f5308d638d56e590ba97b58" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354554271" target="_blank">2026-06-11 14:35:22</a></td></tr>
<tr><td><div id="tag24410" onclick="CopyToClipboard('tag24410');return false;" class="tag-decoration">testing</div><div id="tag25453" onclick="CopyToClipboard('tag25453');return false;" class="tag-decoration">testing-908790b</div><div id="tag27982" onclick="CopyToClipboard('tag27982');return false;" class="tag-decoration">testing-5.1.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/908790bd11c54bde5e979501e778e12f3f272b90" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27498084504" target="_blank">2026-06-14 11:57:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
