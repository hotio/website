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
<tr><td><div id="tag22655" onclick="CopyToClipboard('tag22655');return false;" class="tag-decoration">nightly</div><div id="tag27604" onclick="CopyToClipboard('tag27604');return false;" class="tag-decoration">nightly-ac19a05</div><div id="tag27952" onclick="CopyToClipboard('tag27952');return false;" class="tag-decoration">nightly-7906af7319eb5eee2b91c8d32cf3f3fec2d7097e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/ac19a05b2a9dda37e12851b885f936c05dbe4102" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42139059872" target="_blank">2026-11-06 00:44:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12159" onclick="CopyToClipboard('tag12159');return false;" class="tag-decoration">release</div><div id="tag18308" onclick="CopyToClipboard('tag18308');return false;" class="tag-decoration">release-efef51a</div><div id="tag6632" onclick="CopyToClipboard('tag6632');return false;" class="tag-decoration">release-5.1.3</div><div id="tag27837" onclick="CopyToClipboard('tag27837');return false;" class="tag-decoration">release-v5</div><div id="tag1393" onclick="CopyToClipboard('tag1393');return false;" class="tag-decoration">release-v5.1</div><div id="tag8405" onclick="CopyToClipboard('tag8405');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/efef51a52d51641b4a06dee33f8746bbaf00b190" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42139063534" target="_blank">2026-11-06 00:44:49</a></td></tr>
<tr><td><div id="tag3056" onclick="CopyToClipboard('tag3056');return false;" class="tag-decoration">testing</div><div id="tag29901" onclick="CopyToClipboard('tag29901');return false;" class="tag-decoration">testing-ac44927</div><div id="tag21331" onclick="CopyToClipboard('tag21331');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ac44927321076a779fd4b3f197c742eb4ee7b0f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42094523645" target="_blank">2026-11-05 19:30:22</a></td></tr>
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
