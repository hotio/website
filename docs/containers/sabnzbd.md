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
<tr><td><div id="tag11631" onclick="CopyToClipboard('tag11631');return false;" class="tag-decoration">nightly</div><div id="tag17643" onclick="CopyToClipboard('tag17643');return false;" class="tag-decoration">nightly-641f937</div><div id="tag7767" onclick="CopyToClipboard('tag7767');return false;" class="tag-decoration">nightly-60f555117c78466704bcb82b22cc5027944e8139</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/641f937d362fa822fe1be4f3152eff304ba069b3" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25931735079" target="_blank">2026-05-15 17:26:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7039" onclick="CopyToClipboard('tag7039');return false;" class="tag-decoration">release</div><div id="tag27133" onclick="CopyToClipboard('tag27133');return false;" class="tag-decoration">release-a6ba59c</div><div id="tag27469" onclick="CopyToClipboard('tag27469');return false;" class="tag-decoration">release-5.0.3</div><div id="tag11115" onclick="CopyToClipboard('tag11115');return false;" class="tag-decoration">release-v5</div><div id="tag5591" onclick="CopyToClipboard('tag5591');return false;" class="tag-decoration">release-v5.0</div><div id="tag28114" onclick="CopyToClipboard('tag28114');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a6ba59ce4cf9fddd8e375a5a90a67147733e1a08" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25931733511" target="_blank">2026-05-15 17:26:46</a></td></tr>
<tr><td><div id="tag15576" onclick="CopyToClipboard('tag15576');return false;" class="tag-decoration">testing</div><div id="tag5714" onclick="CopyToClipboard('tag5714');return false;" class="tag-decoration">testing-7689811</div><div id="tag5174" onclick="CopyToClipboard('tag5174');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag9323" onclick="CopyToClipboard('tag9323');return false;" class="tag-decoration">testing-v5</div><div id="tag27791" onclick="CopyToClipboard('tag27791');return false;" class="tag-decoration">testing-v5.0</div><div id="tag13565" onclick="CopyToClipboard('tag13565');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/768981142ec3802b3038e794fb1018ea2e6b087a" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25925457084" target="_blank">2026-05-15 15:12:42</a></td></tr>
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
