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
<tr><td><div id="tag20842" onclick="CopyToClipboard('tag20842');return false;" class="tag-decoration">nightly</div><div id="tag9251" onclick="CopyToClipboard('tag9251');return false;" class="tag-decoration">nightly-e58a877</div><div id="tag28260" onclick="CopyToClipboard('tag28260');return false;" class="tag-decoration">nightly-3376cb5143c418ebc8a4a3eb705d9101a70a2fc1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e58a877d319ddb39736eceb04c8cbeeb0b275a26" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34961578739" target="_blank">2026-09-15 11:07:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11353" onclick="CopyToClipboard('tag11353');return false;" class="tag-decoration">release</div><div id="tag15307" onclick="CopyToClipboard('tag15307');return false;" class="tag-decoration">release-25ade84</div><div id="tag1087" onclick="CopyToClipboard('tag1087');return false;" class="tag-decoration">release-5.1.3</div><div id="tag1088" onclick="CopyToClipboard('tag1088');return false;" class="tag-decoration">release-v5</div><div id="tag2908" onclick="CopyToClipboard('tag2908');return false;" class="tag-decoration">release-v5.1</div><div id="tag3423" onclick="CopyToClipboard('tag3423');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/25ade84786f5f903e676aae3d306bde4e881de6f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34961568391" target="_blank">2026-09-15 11:07:17</a></td></tr>
<tr><td><div id="tag21964" onclick="CopyToClipboard('tag21964');return false;" class="tag-decoration">testing</div><div id="tag21276" onclick="CopyToClipboard('tag21276');return false;" class="tag-decoration">testing-1813012</div><div id="tag13928" onclick="CopyToClipboard('tag13928');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag414" onclick="CopyToClipboard('tag414');return false;" class="tag-decoration">testing-v5</div><div id="tag30014" onclick="CopyToClipboard('tag30014');return false;" class="tag-decoration">testing-v5.1</div><div id="tag21251" onclick="CopyToClipboard('tag21251');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/18130124ef402ea8d1e011bf40a1b264b976037d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34491625895" target="_blank">2026-09-10 14:49:40</a></td></tr>
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
