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
<tr><td><div id="tag13338" onclick="CopyToClipboard('tag13338');return false;" class="tag-decoration">nightly</div><div id="tag29992" onclick="CopyToClipboard('tag29992');return false;" class="tag-decoration">nightly-fe2e043</div><div id="tag30128" onclick="CopyToClipboard('tag30128');return false;" class="tag-decoration">nightly-cbda9451bb3c4143fa4d9d5c1c2b1ab8e5eb3d4d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/fe2e04371bef5758b2b0feb10177f58f642d5f77" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37459542780" target="_blank">2026-10-06 11:54:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15990" onclick="CopyToClipboard('tag15990');return false;" class="tag-decoration">release</div><div id="tag15160" onclick="CopyToClipboard('tag15160');return false;" class="tag-decoration">release-7fdaed0</div><div id="tag10172" onclick="CopyToClipboard('tag10172');return false;" class="tag-decoration">release-5.1.3</div><div id="tag27212" onclick="CopyToClipboard('tag27212');return false;" class="tag-decoration">release-v5</div><div id="tag30897" onclick="CopyToClipboard('tag30897');return false;" class="tag-decoration">release-v5.1</div><div id="tag25875" onclick="CopyToClipboard('tag25875');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7fdaed0b923d160278b328473a75315064ce0559" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37416244689" target="_blank">2026-10-06 04:58:28</a></td></tr>
<tr><td><div id="tag31509" onclick="CopyToClipboard('tag31509');return false;" class="tag-decoration">testing</div><div id="tag25071" onclick="CopyToClipboard('tag25071');return false;" class="tag-decoration">testing-624baa9</div><div id="tag25014" onclick="CopyToClipboard('tag25014');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/624baa96c4295ee201d55d21170f3ef6c0d6a0f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37507562582" target="_blank">2026-10-06 17:57:26</a></td></tr>
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
