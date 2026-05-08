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
<tr><td><div id="tag17488" onclick="CopyToClipboard('tag17488');return false;" class="tag-decoration">nightly</div><div id="tag21377" onclick="CopyToClipboard('tag21377');return false;" class="tag-decoration">nightly-4c6d895</div><div id="tag29088" onclick="CopyToClipboard('tag29088');return false;" class="tag-decoration">nightly-2668f1cd267ce13722c9f695337a8f7d134f3fba</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4c6d895a310285b2e44d26ddab060300f36d1445" target="_blank">Version update: 9d7ab5368590daab11723428c7e73e26c8cae055 => 2668f1cd267ce13722c9f695337a8f7d134f3fba</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25544759827" target="_blank">2026-05-08 08:10:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6051" onclick="CopyToClipboard('tag6051');return false;" class="tag-decoration">release</div><div id="tag451" onclick="CopyToClipboard('tag451');return false;" class="tag-decoration">release-83955ca</div><div id="tag28461" onclick="CopyToClipboard('tag28461');return false;" class="tag-decoration">release-5.0.1</div><div id="tag23229" onclick="CopyToClipboard('tag23229');return false;" class="tag-decoration">release-v5</div><div id="tag7157" onclick="CopyToClipboard('tag7157');return false;" class="tag-decoration">release-v5.0</div><div id="tag5932" onclick="CopyToClipboard('tag5932');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/83955ca245d4949e4c58d3e96c9199ee430f62b8" target="_blank">Version update: 5.0.0 => 5.0.1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25234298284" target="_blank">2026-05-01 21:38:26</a></td></tr>
<tr><td><div id="tag11299" onclick="CopyToClipboard('tag11299');return false;" class="tag-decoration">testing</div><div id="tag8894" onclick="CopyToClipboard('tag8894');return false;" class="tag-decoration">testing-8ce9054</div><div id="tag16044" onclick="CopyToClipboard('tag16044');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/8ce905493d9d459d6b9bc34b20485653418a7eb6" target="_blank">Version update: 5.0.1 => 5.0.2RC1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25549239469" target="_blank">2026-05-08 09:55:25</a></td></tr>
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
