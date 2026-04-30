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
<tr><td><div id="tag16084" onclick="CopyToClipboard('tag16084');return false;" class="tag-decoration">nightly</div><div id="tag28929" onclick="CopyToClipboard('tag28929');return false;" class="tag-decoration">nightly-a47233a</div><div id="tag15624" onclick="CopyToClipboard('tag15624');return false;" class="tag-decoration">nightly-51ea306d9ff60c6e665e2aeedf73de57413d7e98</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/a47233a03e274808d81907ef72861c4c37651784" target="_blank">Version update: 96975050b5c2526a4f81c8c06cb1ab9b18be6d17 => 51ea306d9ff60c6e665e2aeedf73de57413d7e98</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25173948379" target="_blank">2026-04-30 15:24:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22999" onclick="CopyToClipboard('tag22999');return false;" class="tag-decoration">release</div><div id="tag10911" onclick="CopyToClipboard('tag10911');return false;" class="tag-decoration">release-fe02252</div><div id="tag25726" onclick="CopyToClipboard('tag25726');return false;" class="tag-decoration">release-4.5.5</div><div id="tag13654" onclick="CopyToClipboard('tag13654');return false;" class="tag-decoration">release-v4</div><div id="tag20634" onclick="CopyToClipboard('tag20634');return false;" class="tag-decoration">release-v4.5</div><div id="tag8190" onclick="CopyToClipboard('tag8190');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/fe0225281b279c3658afd0ed44e4d357fea8a0c1" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/24552142467" target="_blank">2026-04-17 06:54:27</a></td></tr>
<tr><td><div id="tag14519" onclick="CopyToClipboard('tag14519');return false;" class="tag-decoration">testing</div><div id="tag25900" onclick="CopyToClipboard('tag25900');return false;" class="tag-decoration">testing-f6400d2</div><div id="tag32195" onclick="CopyToClipboard('tag32195');return false;" class="tag-decoration">testing-5.0.0RC3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f6400d284940408a6845372f70b0bfb8ff16c86f" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/24552142924" target="_blank">2026-04-17 06:54:28</a></td></tr>
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
