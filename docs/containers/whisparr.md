---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10201" onclick="CopyToClipboard('tag10201');return false;" class="tag-decoration">v2</div><div id="tag2360" onclick="CopyToClipboard('tag2360');return false;" class="tag-decoration">v2-f568107</div><div id="tag10630" onclick="CopyToClipboard('tag10630');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag2522" onclick="CopyToClipboard('tag2522');return false;" class="tag-decoration">v2-v2</div><div id="tag20842" onclick="CopyToClipboard('tag20842');return false;" class="tag-decoration">v2-v2.2</div><div id="tag12666" onclick="CopyToClipboard('tag12666');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f5681079493172e77f97b091fe3638da1641a183" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715061311" target="_blank">2026-05-12 05:19:58</a></td></tr>
<tr><td><div id="tag16904" onclick="CopyToClipboard('tag16904');return false;" class="tag-decoration">v2-develop</div><div id="tag23583" onclick="CopyToClipboard('tag23583');return false;" class="tag-decoration">v2-develop-4c7e8ff</div><div id="tag22696" onclick="CopyToClipboard('tag22696');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag27269" onclick="CopyToClipboard('tag27269');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag99" onclick="CopyToClipboard('tag99');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag5583" onclick="CopyToClipboard('tag5583');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4c7e8ffb407f9eb8714154a45697eb524bd0fa75" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707338957" target="_blank">2026-05-12 01:20:21</a></td></tr>
<tr><td><div id="tag435" onclick="CopyToClipboard('tag435');return false;" class="tag-decoration">v3</div><div id="tag269" onclick="CopyToClipboard('tag269');return false;" class="tag-decoration">v3-5ea215c</div><div id="tag20430" onclick="CopyToClipboard('tag20430');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag29270" onclick="CopyToClipboard('tag29270');return false;" class="tag-decoration">v3-v3</div><div id="tag24997" onclick="CopyToClipboard('tag24997');return false;" class="tag-decoration">v3-v3.3</div><div id="tag27103" onclick="CopyToClipboard('tag27103');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5ea215c2a03d2332fa3a6a08b1fe5d46c3d10389" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715068861" target="_blank">2026-05-12 05:20:07</a></td></tr>
<tr><td><div id="tag2735" onclick="CopyToClipboard('tag2735');return false;" class="tag-decoration">v3-develop</div><div id="tag19150" onclick="CopyToClipboard('tag19150');return false;" class="tag-decoration">v3-develop-74323f5</div><div id="tag31024" onclick="CopyToClipboard('tag31024');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag32727" onclick="CopyToClipboard('tag32727');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17544" onclick="CopyToClipboard('tag17544');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag11202" onclick="CopyToClipboard('tag11202');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/74323f5706ccfc9ae6ff2f109e9ad4852813dbbe" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715064250" target="_blank">2026-05-12 05:20:02</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
