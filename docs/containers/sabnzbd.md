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
<tr><td><div id="tag238" onclick="CopyToClipboard('tag238');return false;" class="tag-decoration">nightly</div><div id="tag26802" onclick="CopyToClipboard('tag26802');return false;" class="tag-decoration">nightly-f0f8b28</div><div id="tag13846" onclick="CopyToClipboard('tag13846');return false;" class="tag-decoration">nightly-cfde583ccc1896ef8aa32bc05961c3cefbdaa5d3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f0f8b2821e9c9db96f50572796a6b572d547a17f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34491625885" target="_blank">2026-09-10 14:49:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24766" onclick="CopyToClipboard('tag24766');return false;" class="tag-decoration">release</div><div id="tag10050" onclick="CopyToClipboard('tag10050');return false;" class="tag-decoration">release-ba20b35</div><div id="tag11237" onclick="CopyToClipboard('tag11237');return false;" class="tag-decoration">release-5.1.3</div><div id="tag32428" onclick="CopyToClipboard('tag32428');return false;" class="tag-decoration">release-v5</div><div id="tag6473" onclick="CopyToClipboard('tag6473');return false;" class="tag-decoration">release-v5.1</div><div id="tag11929" onclick="CopyToClipboard('tag11929');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ba20b353cdd97b82838713108ed3c770f53f5f39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34423198405" target="_blank">2026-09-10 00:53:24</a></td></tr>
<tr><td><div id="tag797" onclick="CopyToClipboard('tag797');return false;" class="tag-decoration">testing</div><div id="tag21162" onclick="CopyToClipboard('tag21162');return false;" class="tag-decoration">testing-1813012</div><div id="tag12784" onclick="CopyToClipboard('tag12784');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag9588" onclick="CopyToClipboard('tag9588');return false;" class="tag-decoration">testing-v5</div><div id="tag32556" onclick="CopyToClipboard('tag32556');return false;" class="tag-decoration">testing-v5.1</div><div id="tag12021" onclick="CopyToClipboard('tag12021');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/18130124ef402ea8d1e011bf40a1b264b976037d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34491625895" target="_blank">2026-09-10 14:49:40</a></td></tr>
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
