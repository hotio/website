---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20699" onclick="CopyToClipboard('tag20699');return false;" class="tag-decoration">release</div><div id="tag6486" onclick="CopyToClipboard('tag6486');return false;" class="tag-decoration">release-0713c65</div><div id="tag16745" onclick="CopyToClipboard('tag16745');return false;" class="tag-decoration">release-8.3.0</div><div id="tag11726" onclick="CopyToClipboard('tag11726');return false;" class="tag-decoration">release-v8</div><div id="tag8404" onclick="CopyToClipboard('tag8404');return false;" class="tag-decoration">release-v8.3</div><div id="tag22465" onclick="CopyToClipboard('tag22465');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/0713c6503ec34c638c48862766cfb497ff60c45b" target="_blank">Upstream update: noblevpn-83546e7 => noblevpn-aac85c0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21324840159" target="_blank">2026-01-25 01:32:50</a></td></tr>
<tr><td><div id="tag2147" onclick="CopyToClipboard('tag2147');return false;" class="tag-decoration">testing</div><div id="tag25794" onclick="CopyToClipboard('tag25794');return false;" class="tag-decoration">testing-e8ce353</div><div id="tag28663" onclick="CopyToClipboard('tag28663');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag30329" onclick="CopyToClipboard('tag30329');return false;" class="tag-decoration">testing-v8</div><div id="tag7142" onclick="CopyToClipboard('tag7142');return false;" class="tag-decoration">testing-v8.3</div><div id="tag12755" onclick="CopyToClipboard('tag12755');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/e8ce35360961bb50c258b07085be7dd65789055f" target="_blank">Upstream update: noblevpn-2aef811 => noblevpn-83546e7</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21322452798" target="_blank">2026-01-24 22:14:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
