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
<tr><td><div id="tag22853" onclick="CopyToClipboard('tag22853');return false;" class="tag-decoration">nightly</div><div id="tag18371" onclick="CopyToClipboard('tag18371');return false;" class="tag-decoration">nightly-78c53df</div><div id="tag16831" onclick="CopyToClipboard('tag16831');return false;" class="tag-decoration">nightly-60f555117c78466704bcb82b22cc5027944e8139</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/78c53df2cd8bc1f261dda6dfac7368590b03fa4a" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25925454688" target="_blank">2026-05-15 15:12:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12240" onclick="CopyToClipboard('tag12240');return false;" class="tag-decoration">release</div><div id="tag17356" onclick="CopyToClipboard('tag17356');return false;" class="tag-decoration">release-56483e5</div><div id="tag7753" onclick="CopyToClipboard('tag7753');return false;" class="tag-decoration">release-5.0.3</div><div id="tag16796" onclick="CopyToClipboard('tag16796');return false;" class="tag-decoration">release-v5</div><div id="tag26463" onclick="CopyToClipboard('tag26463');return false;" class="tag-decoration">release-v5.0</div><div id="tag20701" onclick="CopyToClipboard('tag20701');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/56483e5c0d8294a4438cb82abcd78aabec0cc1ba" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25925455539" target="_blank">2026-05-15 15:12:40</a></td></tr>
<tr><td><div id="tag11773" onclick="CopyToClipboard('tag11773');return false;" class="tag-decoration">testing</div><div id="tag1403" onclick="CopyToClipboard('tag1403');return false;" class="tag-decoration">testing-7689811</div><div id="tag30992" onclick="CopyToClipboard('tag30992');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag32203" onclick="CopyToClipboard('tag32203');return false;" class="tag-decoration">testing-v5</div><div id="tag7134" onclick="CopyToClipboard('tag7134');return false;" class="tag-decoration">testing-v5.0</div><div id="tag21677" onclick="CopyToClipboard('tag21677');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/768981142ec3802b3038e794fb1018ea2e6b087a" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25925457084" target="_blank">2026-05-15 15:12:42</a></td></tr>
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
