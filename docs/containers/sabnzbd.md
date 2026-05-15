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
<tr><td><div id="tag29661" onclick="CopyToClipboard('tag29661');return false;" class="tag-decoration">nightly</div><div id="tag10784" onclick="CopyToClipboard('tag10784');return false;" class="tag-decoration">nightly-78c53df</div><div id="tag15851" onclick="CopyToClipboard('tag15851');return false;" class="tag-decoration">nightly-60f555117c78466704bcb82b22cc5027944e8139</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/78c53df2cd8bc1f261dda6dfac7368590b03fa4a" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25925454688" target="_blank">2026-05-15 15:12:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6634" onclick="CopyToClipboard('tag6634');return false;" class="tag-decoration">release</div><div id="tag22228" onclick="CopyToClipboard('tag22228');return false;" class="tag-decoration">release-be92865</div><div id="tag18348" onclick="CopyToClipboard('tag18348');return false;" class="tag-decoration">release-5.0.2</div><div id="tag9272" onclick="CopyToClipboard('tag9272');return false;" class="tag-decoration">release-v5</div><div id="tag20854" onclick="CopyToClipboard('tag20854');return false;" class="tag-decoration">release-v5.0</div><div id="tag12923" onclick="CopyToClipboard('tag12923');return false;" class="tag-decoration">release-v5.0.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/be928655a6aeed558def2984ddad6880f650e756" target="_blank"></a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25916123789" target="_blank">2026-05-14 19:44:41</a></td></tr>
<tr><td><div id="tag27457" onclick="CopyToClipboard('tag27457');return false;" class="tag-decoration">testing</div><div id="tag13704" onclick="CopyToClipboard('tag13704');return false;" class="tag-decoration">testing-7689811</div><div id="tag4473" onclick="CopyToClipboard('tag4473');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag29908" onclick="CopyToClipboard('tag29908');return false;" class="tag-decoration">testing-v5</div><div id="tag4514" onclick="CopyToClipboard('tag4514');return false;" class="tag-decoration">testing-v5.0</div><div id="tag699" onclick="CopyToClipboard('tag699');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/768981142ec3802b3038e794fb1018ea2e6b087a" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25925457084" target="_blank">2026-05-15 15:12:42</a></td></tr>
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
