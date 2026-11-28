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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10239" onclick="CopyToClipboard('tag10239');return false;" class="tag-decoration">v2</div><div id="tag17646" onclick="CopyToClipboard('tag17646');return false;" class="tag-decoration">v2-b7bb03d</div><div id="tag11724" onclick="CopyToClipboard('tag11724');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag13026" onclick="CopyToClipboard('tag13026');return false;" class="tag-decoration">v2-v2</div><div id="tag26475" onclick="CopyToClipboard('tag26475');return false;" class="tag-decoration">v2-v2.3</div><div id="tag2236" onclick="CopyToClipboard('tag2236');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b7bb03db4649267de6c2d399ca8957f248d00161" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/46097445406" target="_blank">2026-11-28 02:18:49</a></td></tr>
<tr><td><div id="tag1689" onclick="CopyToClipboard('tag1689');return false;" class="tag-decoration">v2-develop</div><div id="tag27662" onclick="CopyToClipboard('tag27662');return false;" class="tag-decoration">v2-develop-6ff81ab</div><div id="tag3020" onclick="CopyToClipboard('tag3020');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag2607" onclick="CopyToClipboard('tag2607');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag18510" onclick="CopyToClipboard('tag18510');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag16893" onclick="CopyToClipboard('tag16893');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6ff81abe219bf6e8d387b5cfb76f61f9e7524de7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/46097449125" target="_blank">2026-11-28 02:18:51</a></td></tr>
<tr><td><div id="tag10007" onclick="CopyToClipboard('tag10007');return false;" class="tag-decoration">v3</div><div id="tag24052" onclick="CopyToClipboard('tag24052');return false;" class="tag-decoration">v3-f3b7012</div><div id="tag24400" onclick="CopyToClipboard('tag24400');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag30028" onclick="CopyToClipboard('tag30028');return false;" class="tag-decoration">v3-v3</div><div id="tag1617" onclick="CopyToClipboard('tag1617');return false;" class="tag-decoration">v3-v3.6</div><div id="tag27416" onclick="CopyToClipboard('tag27416');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/f3b70121cf0940ddafcc2fadfa9548f850174462" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763754489" target="_blank">2026-11-26 05:46:15</a></td></tr>
<tr><td><div id="tag3619" onclick="CopyToClipboard('tag3619');return false;" class="tag-decoration">v3-develop</div><div id="tag31995" onclick="CopyToClipboard('tag31995');return false;" class="tag-decoration">v3-develop-3a1007f</div><div id="tag18907" onclick="CopyToClipboard('tag18907');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag30337" onclick="CopyToClipboard('tag30337');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12814" onclick="CopyToClipboard('tag12814');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag11674" onclick="CopyToClipboard('tag11674');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3a1007f3461a2b63b0b97bec6f488d8b058a829f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/46097448317" target="_blank">2026-11-28 02:18:51</a></td></tr>
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
