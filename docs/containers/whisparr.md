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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5771" onclick="CopyToClipboard('tag5771');return false;" class="tag-decoration">v2</div><div id="tag21226" onclick="CopyToClipboard('tag21226');return false;" class="tag-decoration">v2-b4cafd0</div><div id="tag28695" onclick="CopyToClipboard('tag28695');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag26543" onclick="CopyToClipboard('tag26543');return false;" class="tag-decoration">v2-v2</div><div id="tag4424" onclick="CopyToClipboard('tag4424');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13221" onclick="CopyToClipboard('tag13221');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b4cafd068010be73de87e6dea8491badfba85189" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395539195" target="_blank">2026-06-29 18:56:47</a></td></tr>
<tr><td><div id="tag7790" onclick="CopyToClipboard('tag7790');return false;" class="tag-decoration">v2-develop</div><div id="tag15407" onclick="CopyToClipboard('tag15407');return false;" class="tag-decoration">v2-develop-a3c8876</div><div id="tag15083" onclick="CopyToClipboard('tag15083');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag2708" onclick="CopyToClipboard('tag2708');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29327" onclick="CopyToClipboard('tag29327');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16504" onclick="CopyToClipboard('tag16504');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a3c8876a45e18e05e43e2e3d226e80154e92b3e6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395536367" target="_blank">2026-06-29 18:56:44</a></td></tr>
<tr><td><div id="tag5646" onclick="CopyToClipboard('tag5646');return false;" class="tag-decoration">v3</div><div id="tag25462" onclick="CopyToClipboard('tag25462');return false;" class="tag-decoration">v3-0833a29</div><div id="tag8966" onclick="CopyToClipboard('tag8966');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag1715" onclick="CopyToClipboard('tag1715');return false;" class="tag-decoration">v3-v3</div><div id="tag23576" onclick="CopyToClipboard('tag23576');return false;" class="tag-decoration">v3-v3.3</div><div id="tag23319" onclick="CopyToClipboard('tag23319');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0833a293ece2a5beab18413ea2ce1fff34dd272c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395534716" target="_blank">2026-06-29 18:56:42</a></td></tr>
<tr><td><div id="tag3323" onclick="CopyToClipboard('tag3323');return false;" class="tag-decoration">v3-develop</div><div id="tag4933" onclick="CopyToClipboard('tag4933');return false;" class="tag-decoration">v3-develop-47e7b82</div><div id="tag28402" onclick="CopyToClipboard('tag28402');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag23264" onclick="CopyToClipboard('tag23264');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag29502" onclick="CopyToClipboard('tag29502');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag11926" onclick="CopyToClipboard('tag11926');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/47e7b82111cae0f8d612b5c0ea42ff88d0e114d1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395536353" target="_blank">2026-06-29 18:56:44</a></td></tr>
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
