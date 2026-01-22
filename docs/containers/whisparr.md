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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14499" onclick="CopyToClipboard('tag14499');return false;" class="tag-decoration">v2</div><div id="tag4929" onclick="CopyToClipboard('tag4929');return false;" class="tag-decoration">v2-df6e6f8</div><div id="tag11994" onclick="CopyToClipboard('tag11994');return false;" class="tag-decoration">v2-2.0.0.2151</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/df6e6f8c5967d6824860dbceb82f318cca5edcfd" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21244738302" target="_blank">2026-01-22 10:20:26</a></td></tr>
<tr><td><div id="tag18569" onclick="CopyToClipboard('tag18569');return false;" class="tag-decoration">v3</div><div id="tag22621" onclick="CopyToClipboard('tag22621');return false;" class="tag-decoration">v3-0a3bb67</div><div id="tag19211" onclick="CopyToClipboard('tag19211');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag1421" onclick="CopyToClipboard('tag1421');return false;" class="tag-decoration">v3-v3</div><div id="tag20101" onclick="CopyToClipboard('tag20101');return false;" class="tag-decoration">v3-v3.2</div><div id="tag17448" onclick="CopyToClipboard('tag17448');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/0a3bb67db3367480c85bce1ce5fb0394165a0a48" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21244741241" target="_blank">2026-01-22 10:20:32</a></td></tr>
<tr><td><div id="tag25247" onclick="CopyToClipboard('tag25247');return false;" class="tag-decoration">v3-develop</div><div id="tag15389" onclick="CopyToClipboard('tag15389');return false;" class="tag-decoration">v3-develop-c383105</div><div id="tag20387" onclick="CopyToClipboard('tag20387');return false;" class="tag-decoration">v3-develop-3.2.1-develop.74</div><div id="tag20501" onclick="CopyToClipboard('tag20501');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag29709" onclick="CopyToClipboard('tag29709');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag5757" onclick="CopyToClipboard('tag5757');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c38310580ada7778f4188a098f61efbe24ccb361" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21246784366" target="_blank">2026-01-22 11:30:05</a></td></tr>
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
