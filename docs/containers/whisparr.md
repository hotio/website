---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24719" onclick="CopyToClipboard('tag24719');return false;" class="tag-decoration">v2</div><div id="tag4250" onclick="CopyToClipboard('tag4250');return false;" class="tag-decoration">v2-a5e82ed</div><div id="tag17056" onclick="CopyToClipboard('tag17056');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag24110" onclick="CopyToClipboard('tag24110');return false;" class="tag-decoration">v2-v2</div><div id="tag25403" onclick="CopyToClipboard('tag25403');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13740" onclick="CopyToClipboard('tag13740');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a5e82ed216cdcb7da19ff249a280b02c26c4afad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446318899" target="_blank">2026-06-30 13:02:02</a></td></tr>
<tr><td><div id="tag27303" onclick="CopyToClipboard('tag27303');return false;" class="tag-decoration">v2-develop</div><div id="tag30127" onclick="CopyToClipboard('tag30127');return false;" class="tag-decoration">v2-develop-f89e86e</div><div id="tag4515" onclick="CopyToClipboard('tag4515');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag583" onclick="CopyToClipboard('tag583');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19476" onclick="CopyToClipboard('tag19476');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag12267" onclick="CopyToClipboard('tag12267');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f89e86e6e83b59aa19c3ec0cb2fad495892cb9be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446312286" target="_blank">2026-06-30 13:01:57</a></td></tr>
<tr><td><div id="tag1779" onclick="CopyToClipboard('tag1779');return false;" class="tag-decoration">v3</div><div id="tag26313" onclick="CopyToClipboard('tag26313');return false;" class="tag-decoration">v3-c514abc</div><div id="tag14110" onclick="CopyToClipboard('tag14110');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag5921" onclick="CopyToClipboard('tag5921');return false;" class="tag-decoration">v3-v3</div><div id="tag16355" onclick="CopyToClipboard('tag16355');return false;" class="tag-decoration">v3-v3.3</div><div id="tag16600" onclick="CopyToClipboard('tag16600');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/c514abcc95b2d169b93f9aa8c6e4846252f8008c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591501776" target="_blank">2026-07-02 12:52:54</a></td></tr>
<tr><td><div id="tag21810" onclick="CopyToClipboard('tag21810');return false;" class="tag-decoration">v3-develop</div><div id="tag5338" onclick="CopyToClipboard('tag5338');return false;" class="tag-decoration">v3-develop-36cff46</div><div id="tag17700" onclick="CopyToClipboard('tag17700');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag24425" onclick="CopyToClipboard('tag24425');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag13629" onclick="CopyToClipboard('tag13629');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag22834" onclick="CopyToClipboard('tag22834');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/36cff468dc5db31504de3d247af36cf37e075201" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591500334" target="_blank">2026-07-02 12:52:52</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
