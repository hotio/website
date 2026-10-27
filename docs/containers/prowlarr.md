---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30898" onclick="CopyToClipboard('tag30898');return false;" class="tag-decoration">nightly</div><div id="tag18597" onclick="CopyToClipboard('tag18597');return false;" class="tag-decoration">nightly-bfdd2a9</div><div id="tag11341" onclick="CopyToClipboard('tag11341');return false;" class="tag-decoration">nightly-2.7.0.5722</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/bfdd2a9f12718cf28b832bcd51bfeac85024fb41" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40514745699" target="_blank">2026-10-27 13:44:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag656" onclick="CopyToClipboard('tag656');return false;" class="tag-decoration">release</div><div id="tag6317" onclick="CopyToClipboard('tag6317');return false;" class="tag-decoration">release-87c7fa6</div><div id="tag5149" onclick="CopyToClipboard('tag5149');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/87c7fa65b1d06a498f9d97624c7365c0866c1232" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40230454249" target="_blank">2026-10-25 20:22:21</a></td></tr>
<tr><td><div id="tag7800" onclick="CopyToClipboard('tag7800');return false;" class="tag-decoration">testing</div><div id="tag8457" onclick="CopyToClipboard('tag8457');return false;" class="tag-decoration">testing-228c2b0</div><div id="tag29440" onclick="CopyToClipboard('tag29440');return false;" class="tag-decoration">testing-2.6.6.5717</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/228c2b0fc40f640bf6b6e8ffb894b760844a8e76" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40514734906" target="_blank">2026-10-27 13:44:29</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
