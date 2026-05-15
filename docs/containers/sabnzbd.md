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
<tr><td><div id="tag24294" onclick="CopyToClipboard('tag24294');return false;" class="tag-decoration">nightly</div><div id="tag15303" onclick="CopyToClipboard('tag15303');return false;" class="tag-decoration">nightly-641f937</div><div id="tag1076" onclick="CopyToClipboard('tag1076');return false;" class="tag-decoration">nightly-60f555117c78466704bcb82b22cc5027944e8139</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/641f937d362fa822fe1be4f3152eff304ba069b3" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25931735079" target="_blank">2026-05-15 17:26:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22498" onclick="CopyToClipboard('tag22498');return false;" class="tag-decoration">release</div><div id="tag3518" onclick="CopyToClipboard('tag3518');return false;" class="tag-decoration">release-a6ba59c</div><div id="tag12365" onclick="CopyToClipboard('tag12365');return false;" class="tag-decoration">release-5.0.3</div><div id="tag23249" onclick="CopyToClipboard('tag23249');return false;" class="tag-decoration">release-v5</div><div id="tag1658" onclick="CopyToClipboard('tag1658');return false;" class="tag-decoration">release-v5.0</div><div id="tag11262" onclick="CopyToClipboard('tag11262');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a6ba59ce4cf9fddd8e375a5a90a67147733e1a08" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25931733511" target="_blank">2026-05-15 17:26:46</a></td></tr>
<tr><td><div id="tag30285" onclick="CopyToClipboard('tag30285');return false;" class="tag-decoration">testing</div><div id="tag1320" onclick="CopyToClipboard('tag1320');return false;" class="tag-decoration">testing-6195fce</div><div id="tag1780" onclick="CopyToClipboard('tag1780');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag22791" onclick="CopyToClipboard('tag22791');return false;" class="tag-decoration">testing-v5</div><div id="tag28322" onclick="CopyToClipboard('tag28322');return false;" class="tag-decoration">testing-v5.0</div><div id="tag28108" onclick="CopyToClipboard('tag28108');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6195fcebc85c7d9f1d8052fadfca71073306fbd8" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25931735961" target="_blank">2026-05-15 17:26:49</a></td></tr>
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
