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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22727" onclick="CopyToClipboard('tag22727');return false;" class="tag-decoration">v2</div><div id="tag25900" onclick="CopyToClipboard('tag25900');return false;" class="tag-decoration">v2-632fb9e</div><div id="tag430" onclick="CopyToClipboard('tag430');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag10727" onclick="CopyToClipboard('tag10727');return false;" class="tag-decoration">v2-v2</div><div id="tag8404" onclick="CopyToClipboard('tag8404');return false;" class="tag-decoration">v2-v2.2</div><div id="tag16456" onclick="CopyToClipboard('tag16456');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/632fb9ea6b0ab4d2b56c6eda018d51ac5d16db60" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568972" target="_blank">2026-07-08 21:57:03</a></td></tr>
<tr><td><div id="tag16114" onclick="CopyToClipboard('tag16114');return false;" class="tag-decoration">v2-develop</div><div id="tag27039" onclick="CopyToClipboard('tag27039');return false;" class="tag-decoration">v2-develop-36edde9</div><div id="tag17538" onclick="CopyToClipboard('tag17538');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag3965" onclick="CopyToClipboard('tag3965');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5145" onclick="CopyToClipboard('tag5145');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag758" onclick="CopyToClipboard('tag758');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/36edde9b89623edf5f47e4c37f59720ab38f14c1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29180897608" target="_blank">2026-07-12 05:15:05</a></td></tr>
<tr><td><div id="tag20963" onclick="CopyToClipboard('tag20963');return false;" class="tag-decoration">v3</div><div id="tag29647" onclick="CopyToClipboard('tag29647');return false;" class="tag-decoration">v3-07d0e40</div><div id="tag25849" onclick="CopyToClipboard('tag25849');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag29894" onclick="CopyToClipboard('tag29894');return false;" class="tag-decoration">v3-v3</div><div id="tag18450" onclick="CopyToClipboard('tag18450');return false;" class="tag-decoration">v3-v3.3</div><div id="tag1991" onclick="CopyToClipboard('tag1991');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/07d0e406b8d766712ff279abfce49d64aee8b6e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568950" target="_blank">2026-07-08 21:57:02</a></td></tr>
<tr><td><div id="tag31888" onclick="CopyToClipboard('tag31888');return false;" class="tag-decoration">v3-develop</div><div id="tag15516" onclick="CopyToClipboard('tag15516');return false;" class="tag-decoration">v3-develop-f815a73</div><div id="tag1787" onclick="CopyToClipboard('tag1787');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag13256" onclick="CopyToClipboard('tag13256');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5520" onclick="CopyToClipboard('tag5520');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag27321" onclick="CopyToClipboard('tag27321');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f815a73ae8416334da49030948a5814c74b7c147" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29206867147" target="_blank">2026-07-12 19:59:52</a></td></tr>
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
