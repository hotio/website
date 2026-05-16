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
<tr><td><div id="tag4230" onclick="CopyToClipboard('tag4230');return false;" class="tag-decoration">nightly</div><div id="tag13362" onclick="CopyToClipboard('tag13362');return false;" class="tag-decoration">nightly-2bb47ce</div><div id="tag30291" onclick="CopyToClipboard('tag30291');return false;" class="tag-decoration">nightly-e3c8d79dae855079d2a279cb54b7be74b8709dda</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2bb47cee25026196fbe04fb1deaa151b1171cf3e" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25965002639" target="_blank">2026-05-16 14:55:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18757" onclick="CopyToClipboard('tag18757');return false;" class="tag-decoration">release</div><div id="tag10503" onclick="CopyToClipboard('tag10503');return false;" class="tag-decoration">release-a6ba59c</div><div id="tag24198" onclick="CopyToClipboard('tag24198');return false;" class="tag-decoration">release-5.0.3</div><div id="tag22540" onclick="CopyToClipboard('tag22540');return false;" class="tag-decoration">release-v5</div><div id="tag11629" onclick="CopyToClipboard('tag11629');return false;" class="tag-decoration">release-v5.0</div><div id="tag31976" onclick="CopyToClipboard('tag31976');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a6ba59ce4cf9fddd8e375a5a90a67147733e1a08" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25931733511" target="_blank">2026-05-15 17:26:46</a></td></tr>
<tr><td><div id="tag16615" onclick="CopyToClipboard('tag16615');return false;" class="tag-decoration">testing</div><div id="tag16349" onclick="CopyToClipboard('tag16349');return false;" class="tag-decoration">testing-6195fce</div><div id="tag9190" onclick="CopyToClipboard('tag9190');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag18506" onclick="CopyToClipboard('tag18506');return false;" class="tag-decoration">testing-v5</div><div id="tag10252" onclick="CopyToClipboard('tag10252');return false;" class="tag-decoration">testing-v5.0</div><div id="tag10190" onclick="CopyToClipboard('tag10190');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/6195fcebc85c7d9f1d8052fadfca71073306fbd8" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25931735961" target="_blank">2026-05-15 17:26:49</a></td></tr>
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
